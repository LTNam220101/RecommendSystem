// import itemApi from 'api/itemApi';
import filmApi from "../../../../../api/filmApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from ".";

function* getSliderSaga(action) {
  try {
    console.log(action.payload);
    const res = yield call(filmApi.getAll);
    // console.log(res)
    yield put(actions.getItemSliderSuccess(res.data));
    if (res.code === 201) {
      yield put(actions.getItemSliderFailed(res.message));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getItemSliderFailed(false));
  }
}

// function* getItemDetailSellingSaga(action) {
//   try {
//     const res = yield call(filmApi.getItemSelling, action.payload);
//     yield put(actions.getItemDetailSuccess(res.results));
//     if (res.code === 201 || res.code === 203) {
//       yield put(actions.getItemDetailFailed(res.message));
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(actions.getItemDetailFailed(false));
//   }
// }

// function* addViewSaga(action) {
//   try {
//     const res = yield call(filmApi.addView, action.payload);
//     yield put(actions.addViewSuccess(res.results));
//   } catch (error) {
//     console.log(error);
//     yield put(actions.addViewFailed());
//   }
// }

// function* addLikeSaga(action) {
//   try {
//     const res = yield call(filmApi.addLike, action.payload);
//     yield put(actions.addLikeSuccess(res.results));
//   } catch (error) {
//     console.log(error);
//     yield put(actions.addLikeFailed());
//   }
// }

export function* sliderSaga() {
  yield takeLatest(actions.getItemSliderRequest, getSliderSaga);
  //   yield takeLatest(actions.getItemDetailSellingRequest, getItemDetailSellingSaga);
  //   yield takeLatest(actions.addViewRequest, addViewSaga);
  //   yield takeLatest(actions.addLikeRequest, addLikeSaga);
}
