import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {APP_LANGUAGE_TYPE} from 'src/shared/constants';
import {getDefaultAppLang} from 'src/shared/utils';

type SettingsState = {
  appLang: APP_LANGUAGE_TYPE;
};

type InStoreType = {
  settings: SettingsState;
};

const initialState: SettingsState = {
  appLang: getDefaultAppLang(),
};

export const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setAppLang: (state, action: PayloadAction<APP_LANGUAGE_TYPE>) => {
      state.appLang = action.payload;
    },
  },
});

export const actions = {...slice.actions};

export const selectors = {
  appLang: (state: InStoreType) => state.settings.appLang,
};
