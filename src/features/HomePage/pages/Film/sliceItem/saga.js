// import itemApi from 'api/itemApi';
import filmApi from "../../../../../api/filmApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from ".";
import { actions as loginActions } from '../../../../Login/sliceLogin' 
import userApi from "../../../../../api/userApi";

function* getMovieSaga(action) {
  try {
    console.log(action.payload);
    const res = yield call(filmApi.getDetail, action.payload);
    yield put(actions.getItemMovieSuccess(res.data.data));
    if (res.code === 201) {
      yield put(actions.getItemMovieFailed(res.message));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getItemMovieFailed(false));
  }
}

function* addRatingSaga(action) {
  try {
    console.log(action.payload);
    const res = yield call(filmApi.addRating, action.payload);
    console.log(res)
    yield put(actions.addRatingSuccess(res));
  } catch (error) {
    console.log(error);
    yield put(actions.addRatingFailed());
  }
}

function* addFavoriteSaga(action) {
  try {
    console.log(action.payload);
    const { id, email, history } = action.payload;
    const res = yield call(userApi.addToFavorites, { id, email });
    yield put(loginActions.getLoginSuccess(res.data.data));
    yield put(actions.addFavoriteSuccess(res.data.data));
  } catch (error) {
    console.log(error);
    yield put(actions.addFavoriteFailed());
  }
}

function* getRatingSaga(action) {
  try {
    console.log(action.payload);
    const res = yield call(filmApi.getRating, action.payload);
    console.log(res)
    yield put(actions.getRatingSuccess(res.data.data.rating));
  } catch (error) {
    console.log(error);
    yield put(actions.getRatingFailed());
  }
}


export function* movieSaga() {
  yield takeLatest(actions.getItemMovieRequest, getMovieSaga);
  //   yield takeLatest(actions.getItemDetailSellingRequest, getItemDetailSellingSaga);
  //   yield takeLatest(actions.addViewRequest, addViewSaga);
  yield takeLatest(actions.addRatingRequest, addRatingSaga);
  yield takeLatest(actions.addFavoriteRequest, addFavoriteSaga);
  yield takeLatest(actions.getRatingRequest, getRatingSaga);
}
