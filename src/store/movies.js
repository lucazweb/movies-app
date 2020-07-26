import api from '../services/movies';
import { ENABLE_LOADING, DISABLE_LOADING } from './user-interface';

const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

const GET_DETAIL_REQUEST = 'GET_DETAIL_REQUEST';
const GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS';
const GET_DETAIL_FAILURE = 'GET_DETAIL_FAILURE';

export const RESET_SEARCH = 'RESET_SEARCH';

const handleLocalMovies = (movies, fullResults, start) => {
  localStorage.setItem(
    'mapphold',
    JSON.stringify({
      movies,
      hold: fullResults.slice(start, fullResults.length),
    })
  );
};

export const getMovies = (q, page = 1) => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
    payload: {
      query: q,
      page,
    },
  });

  dispatch({
    type: ENABLE_LOADING,
  });

  try {
    const { data } = await api.get(`/`, {
      params: {
        s: q,
        page,
      },
    });

    let movies = [];

    if (data.Search) {
      const { Search } = data;

      // movies as search results
      movies = Search.slice(0, 6);

      if (page > 1) {
        // get hold and add to slice of results
        const cached = JSON.parse(localStorage.getItem('mapphold'));
        movies = [...cached.hold, ...Search.slice(0, 2)];
        handleLocalMovies(movies, Search, 2);
      } else {
        if (Search.length > 6) {
          handleLocalMovies(movies, Search, 6);
        }
      }
    }

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: movies,
    });

    dispatch({
      type: DISABLE_LOADING,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_MOVIES_FAILURE,
    });

    dispatch({
      type: DISABLE_LOADING,
    });
  }
};

export const getMovieDetail = (id) => async (dispatch) => {
  dispatch({
    type: GET_DETAIL_REQUEST,
  });

  dispatch({
    type: ENABLE_LOADING,
  });

  try {
    const { data } = await api.get(`/`, {
      params: {
        i: id,
      },
    });

    if (!data.Error) {
      dispatch({
        type: GET_DETAIL_SUCCESS,
        payload: data,
      });

      dispatch({
        type: DISABLE_LOADING,
      });
    } else {
      throw new Error();
    }
  } catch (err) {
    dispatch({
      type: GET_DETAIL_FAILURE,
    });
    dispatch({
      type: DISABLE_LOADING,
    });
  }
};

const initialState = {
  query: null,
  selected: null,
  error: null,
  page: null,
  searching: false,
  movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      const { query, page } = action.payload;
      return { ...state, error: null, query, page, searching: true };

    case GET_MOVIES_SUCCESS:
      const movies = action.payload;

      return { ...state, error: null, movies: [...state.movies, ...movies] };

    case GET_MOVIES_FAILURE:
    case GET_DETAIL_FAILURE:
      return { ...state, error: 'Algo deu errado' };

    case GET_DETAIL_SUCCESS:
      const movie = action.payload;
      return { ...state, error: null, selected: movie };

    case RESET_SEARCH:
      return {
        movies: [],
        error: null,
        selected: null,
        query: null,
        searching: false,
      };

    default:
      return state;
  }
}
