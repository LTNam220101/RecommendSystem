// import itemApi from 'api/itemApi';
import filmApi from "../../../../../api/filmApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from ".";

function* getListMovieSaga(action) {
  try {
    const res = yield call(filmApi.getAll);
    yield put(actions.getListMovieSuccess(res.data));
    if (res.code === 201) {
      yield put(actions.getListMovieFailed(res.message));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getListMovieFailed(false));
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

export function* listMovieSaga() {
  yield takeLatest(actions.getListMovieRequest, getListMovieSaga);
  //   yield takeLatest(actions.getItemDetailSellingRequest, getItemDetailSellingSaga);
  //   yield takeLatest(actions.addViewRequest, addViewSaga);
  //   yield takeLatest(actions.addLikeRequest, addLikeSaga);
}
