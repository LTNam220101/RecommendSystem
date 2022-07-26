// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
// import { ItemDetailProps, ItemDetailState, SellItemId } from './types';

export const initialState = {
  loadingAddFavorite: false,
  dataAddFavorite: undefined,
  errorAddFavorite: false,

  loadingListFavorites: false,
  dataListFavorites: undefined,
  errorListFavorites: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // get info item
    getAddFavoriteRequest(state, action) {
      state.loadingAddFavorite = true;
      state.errorAddFavorite = false;
    },
    getAddFavoriteSuccess(state, action) {
      state.loadingAddFavorite = false;
      state.dataAddFavorite = action.payload;
    },
    getAddFavoriteFailed(state, action) {
      state.loadingAddFavorite = false;
      state.errorAddFavorite = action.payload;
    },

    getListFavoritesRequest(state, action) {
      state.loadingListFavorites = true;
      state.errorListFavorites = false;
    },
    getListFavoritesSuccess(state, action) {
      state.loadingListFavorites = false;
      state.dataListFavorites = action.payload;
    },
    getListFavoritesFailed(state, action) {
      state.loadingListFavorites = false;
      state.errorListFavorites = action.payload;
    },
  },
});

export const { actions } = user;
export default user.reducer
// export const useAddFavoriteSlice = () => {
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
