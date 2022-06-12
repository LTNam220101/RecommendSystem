// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliderSaga } from './saga';
// import { ItemDetailProps, ItemDetailState, SellItemId } from './types';

export const initialState = {
  loadingSlider: false,
  dataSlider: [],
  errorSlider: false,

//   loadingAddView: false,
//   dataAddView: {},
//   errorAddView: false,

//   loadingAddLike: false,
//   dataAddLike: {},
//   errorAddLike: false,
};

const slider = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    // get info item
    getItemSliderRequest(state, action) {
      state.loadingSlider = true;
      state.errorSlider = false;
    },
    getItemSliderSuccess(state, action) {
      state.loadingSlider = false;
      state.dataSlider = action.payload;
    },
    getItemSliderFailed(state, action) {
      state.loadingSlider = false;
      state.errorSlider = action.payload;
    },

    // getItemSliderSellingRequest(state, action) {
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

export const { actions } = slider;
export default slider.reducer
// export const useSliderSlice = () => {
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
