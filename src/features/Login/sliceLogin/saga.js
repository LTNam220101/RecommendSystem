// import itemApi from 'api/itemApi';
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from ".";
import authApi from "../../../api/authApi";

function* getLoginSaga(action) {
  try {
    const res = yield call(authApi.login, action.payload);
    if (res.status === 200) {
        if(res.data.result === "successed"){
            yield put(actions.getLoginSuccess(res.data.data));
        }else {
            yield put(actions.getLoginFailed(res));
        }
    }else {
        yield put(actions.getLoginFailed(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getLoginFailed(false));
  }
}

function* getRegisterSaga(action) {
  try {
    const password = action.payload.password;
    const res = yield call(authApi.register, action.payload);
    if (res.status === 200) {
        if(res.data.result === "successed"){
            yield put(actions.getLoginRequest({...res.data.data, password}));
        }else {
            yield put(actions.getRegisterFailed(res));
        }
    }else {
        yield put(actions.getRegisterFailed(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getRegisterFailed(false));
  }
}

export function* loginSaga() {
  yield takeLatest(actions.getLoginRequest, getLoginSaga);
  yield takeLatest(actions.getRegisterRequest, getRegisterSaga);
}
