// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { movieSaga } from './saga';
// import { ItemDetailProps, ItemDetailState, SellItemId } from './types';

export const initialState = {
  loadingMovie: false,
  dataMovie: [],
  errorMovie: false,

//   loadingAddView: false,
//   dataAddView: {},
//   errorAddView: false,

//   loadingAddLike: false,
//   dataAddLike: {},
//   errorAddLike: false,
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

    // getItemMovieSellingRequest(state, action) {
    //   state.loadingItemDetail = true;
    //   state.errorItemDetail = false;
    // },

    // // add view
    // addViewRequest(state, action) {
    //   state.loadingAddView = true;
    //   state.errorAddView = false;
    // },
    // addViewSuccess(state, action) {
    //   state.loadingAddView = false;
    //   state.dataAddView = action.payload;
    //   if (state.dataItemDetail.views) {
    //     state.dataItemDetail.views = action.payload.views;
    //   }
    // },
    // addViewFailed(state) {
    //   state.loadingAddView = false;
    //   state.errorAddView = true;
    // },

    // // add like
    // addLikeRequest(state, action) {
    //   state.loadingAddLike = true;
    //   state.errorAddLike = false;
    // },
    // addLikeSuccess(state, action) {
    //   state.loadingAddLike = false;
    //   state.dataAddLike = action.payload;
    //   state.dataItemDetail.favorites = action.payload.favorites;
    //   state.dataItemDetail.is_favorites = action.payload.is_favorites;
    // },
    // addLikeFailed(state) {
    //   state.loadingAddLike = false;
    //   state.errorAddLike = true;
    // },
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
