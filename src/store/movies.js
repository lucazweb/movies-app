import api from '../services/movies';
import { ENABLE_LOADING, DISABLE_LOADING } from './user-interface';

const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

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
  });

  dispatch({
    type: ENABLE_LOADING,
  });

  try {
    const {
      data: { Search: movies },
    } = await api.get(`/?s=${q}`);

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
      type: DISABLE_LOADING,
    });
  }
};

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      // should return loading state
      return state;

    case GET_MOVIES_SUCCESS:
      const movies = action.payload;
      return [...movies];

    default:
      return state;
  }
}
