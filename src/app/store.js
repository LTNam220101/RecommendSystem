import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import profileReducer from "../features/HomePage/Slice";
import sliderReducer from "../features/HomePage/components/Slider/slice";
import movieReducer from "../features/HomePage/pages/Film/sliceItem";
import createSagaMiddleware from "redux-saga";
// import authReducer from 'features/Authentication/slice';
import { sliderSaga } from "../features/HomePage/components/Slider/slice/saga";
import { movieSaga } from "../features/HomePage/pages/Film/sliceItem/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = {
  profile: profileReducer,
  slider: sliderReducer,
  movie: movieReducer,
  //   auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(sliderSaga);
sagaMiddleware.run(movieSaga);

export default store;
