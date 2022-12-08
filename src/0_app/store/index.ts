import {Settings, User} from '@entities';
import {configureStore, Middleware} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import {useDispatch} from 'react-redux';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
} from 'redux-persist';
import {ENVIRONMENT} from 'src/shared/constants';

export const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const userPersistConfig = {
  key: 'user',
  storage: reduxStorage,
  whitelist: ['token'],
};

const settingsPersistConfig = {
  key: 'settings',
  storage: reduxStorage,
};

export const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, User.slice.reducer),
  settings: persistReducer(settingsPersistConfig, Settings.Model.slice.reducer),
});

const middlewares: Middleware[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: ENVIRONMENT === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['playlist.activePlaylistContent'],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
