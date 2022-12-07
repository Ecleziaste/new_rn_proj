import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {signIn, signUp} from './actions';

export type UserState = {
  token: string | null;
};

const initialState: UserState = {
  token: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
    });

    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
    });
  },
});

type InStoreType = {
  user: UserState;
};

export const selectors = {
  selectUser: (state: InStoreType) => state.user,
  selectToken: (state: InStoreType) => state.user.token,
};

export const actions = {
  ...slice.actions,
  signUp,
  signIn,
};
export const reducer = slice.reducer;
