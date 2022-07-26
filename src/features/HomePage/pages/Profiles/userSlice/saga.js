// import itemApi from 'api/itemApi';
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from ".";
import userApi from "../../../../../api/userApi";

function* getAddFavoriteSaga(action) {
  try {
    const res = yield call(userApi.addToFavorites, action.payload);
    if (res.status === 200) {
        if(res.data.result === "successed"){
          yield put(actions.getAddFavoriteSuccess(res.data.data));
        }else {
            yield put(actions.getAddFavoriteFailed(res));
        }
    }else {
        yield put(actions.getAddFavoriteFailed(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getAddFavoriteFailed(false));
  }
}

function* getListFavoritesSaga(action) {
  try {
    const res = yield call(userApi.listFavorites, action.payload);
    if (res.status === 200) {
        if(res.data.result === "successed"){
            yield put(actions.getListFavoritesSuccess(res.data.data));
        }else {
            yield put(actions.getListFavoritesFailed(res));
        }
    }else {
        yield put(actions.getListFavoritesFailed(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getListFavoritesFailed(false));
  }
}

export function* userSaga() {
  yield takeLatest(actions.getAddFavoriteRequest, getAddFavoriteSaga);
  yield takeLatest(actions.getListFavoritesRequest, getListFavoritesSaga);
}
