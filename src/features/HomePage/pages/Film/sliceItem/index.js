// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { movieSaga } from './saga';
// import { ItemDetailProps, ItemDetailState, SellItemId } from './types';

export const initialState = {
  loadingMovie: false,
  dataMovie: [],
  errorMovie: false,

  loadingRating: false,
  dataRating: [],
  errorRating: false,

  loadingFavorite: false,
  dataFavorite: [],
  errorFavorite: false,

  loadingRatingCount: false,
  dataRatingCount: 0,
  errorRatingCount: false,
};

const movie = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // get info item
    getItemMovieRequest(state, action) {
      state.loadingMovie = true;
      state.errorMovie = false;
    },
    getItemMovieSuccess(state, action) {
      state.loadingMovie = false;
      state.dataMovie = action.payload;
    },
    getItemMovieFailed(state, action) {
      state.loadingMovie = false;
      state.errorMovie = action.payload;
    },

    // // add like
    addRatingRequest(state, action) {
      state.loadingRating = true;
      state.errorRating = false;
    },
    addRatingSuccess(state, action) {
      state.loadingRating = false;
      state.dataRating = action.payload;
    },
    addRatingFailed(state) {
      state.loadingRating = false;
      state.errorRating = true;
    },

    // // add like
    addFavoriteRequest(state, action) {
      state.loadingFavorite = true;
      state.errorFavorite = false;
    },
    addFavoriteSuccess(state, action) {
      state.loadingFavorite = false;
      state.dataFavorite = action.payload;
    },
    addFavoriteFailed(state) {
      state.loadingFavorite = false;
      state.errorFavorite = true;
    },

    // // add like
    getRatingRequest(state, action) {
      state.loadingRatingCount = true;
      state.errorRatingCount = false;
    },
    getRatingSuccess(state, action) {
      state.loadingRatingCount = false;
      state.dataRatingCount = action.payload;
    },
    getRatingFailed(state) {
      state.loadingRatingCount = false;
      state.errorRatingCount = true;
    },
    resetRating(state) {
      state.dataRatingCount = 0;
    },
  },
});

export const { actions } = movie;
export default movie.reducer
// export const useMovieSlice = () => {
//   return { actions: slice.actions };
// };

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useItemDetailSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
