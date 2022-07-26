import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import profileReducer from "../features/HomePage/Slice";
import sliderReducer from "../features/HomePage/components/Slider/slice";
import movieReducer from "../features/HomePage/pages/Film/sliceItem";
import listMovieReducer from "../features/HomePage/components/ListItem/slice";
import loginReducer from "../features/Login/sliceLogin";
import userReducer from "../features/HomePage/pages/Profiles/userSlice";
import createSagaMiddleware from "redux-saga";
// import authReducer from 'features/Authentication/slice';

import { sliderSaga } from "../features/HomePage/components/Slider/slice/saga";
import { movieSaga } from "../features/HomePage/pages/Film/sliceItem/saga";
import { listMovieSaga } from "../features/HomePage/components/ListItem/slice/saga";
import { loginSaga } from "../features/Login/sliceLogin/saga";
import { userSaga } from "../features/HomePage/pages/Profiles/userSlice/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = {
  profile: profileReducer,
  slider: sliderReducer,
  movie: movieReducer,
  listMovie: listMovieReducer,
  login: loginReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(sliderSaga);
sagaMiddleware.run(movieSaga);
sagaMiddleware.run(listMovieSaga);
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(userSaga);

export default store;
