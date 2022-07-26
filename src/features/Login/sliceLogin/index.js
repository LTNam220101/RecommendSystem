// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
// import { ItemDetailProps, ItemDetailState, SellItemId } from './types';

export const initialState = {
  loadingLogin: false,
  dataLogin: undefined,
  errorLogin: false,

  loadingRegister: false,
  dataRegister: undefined,
  errorRegister: false,
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // get info item
    getLoginRequest(state, action) {
      state.loadingLogin = true;
      state.errorLogin = false;
    },
    getLoginSuccess(state, action) {
      state.loadingLogin = false;
      state.dataLogin = action.payload;
    },
    getLoginFailed(state, action) {
      state.loadingLogin = false;
      state.errorLogin = action.payload;
    },
    logout(state) {
      state.dataLogin = undefined
    },

    getRegisterRequest(state, action) {
      state.loadingRegister = true;
      state.errorRegister = false;
    },
    getRegisterSuccess(state, action) {
      state.loadingRegister = false;
      state.dataRegister = action.payload;
    },
    getRegisterFailed(state, action) {
      state.loadingRegister = false;
      state.errorRegister = action.payload;
    },
  },
});

export const { actions } = login;
export default login.reducer
// export const useLoginSlice = () => {
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
