import api from '../services/movies';
import { ENABLE_LOADING, DISABLE_LOADING } from './user-interface';

const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

const GET_DETAIL_REQUEST = 'GET_DETAIL_REQUEST';
const GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS';
const GET_DETAIL_FAILURE = 'GET_DETAIL_FAILURE';

export const RESET_SEARCH = 'RESET_SEARCH';

export const getMoviesReq = () => ({
  type: GET_MOVIES_REQUEST,
});

export const getMoviesSuccess = (data) => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});

export const getMovies = (q) => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
    payload: {
      query: q,
    },
  });

  dispatch({
    type: ENABLE_LOADING,
  });

  try {
    const { data } = await api.get(`/?s=${q}`);

    let movies = [];

    if (data.Search) {
      const { Search } = data;
      movies = Search;
    }

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: movies,
    });

    dispatch({
      type: DISABLE_LOADING,
    });
  } catch (err) {
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
    const { data } = await api.get(`/?i=${id}`);

    dispatch({
      type: DISABLE_LOADING,
    });

    dispatch({
      type: GET_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DISABLE_LOADING,
    });
  }
};

const initialState = {
  query: null,
  selected: null,
  error: null,
  movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      const query = action.payload;
      return { ...state, error: null, query };

    case GET_MOVIES_SUCCESS:
      console.log(GET_MOVIES_SUCCESS);
      const movies = action.payload;
      return { ...state, error: null, movies: [...movies] };

    case GET_MOVIES_FAILURE:
      console.log('GET_MOVIES_FAILURE');
      return { ...state, error: 'Algo deu errado' };

    case GET_DETAIL_SUCCESS:
      const movie = action.payload;
      return { ...state, error: null, selected: movie };

    case RESET_SEARCH:
      return { movies: [], error: null, selected: null, query: null };

    default:
      return state;
  }
}
