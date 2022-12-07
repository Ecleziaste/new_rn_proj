import {createAsyncThunk} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/SignUp', async (dto: any) => {
  console.log('=>(actions.ts:5) dto', dto);
});

export const signIn = createAsyncThunk('user/SignIn', async (dto: any) => {
  console.log('=>(actions.ts:5) dto', dto);
});
