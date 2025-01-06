import { APP_NAME } from '@packages/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
   type Reducer,
   combineReducers,
   configureStore,
} from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appSlice } from './slices/app';

const createReducer = (customReducer: Record<string, Reducer> = {}) =>
   combineReducers({
      app: appSlice.reducer,
      ...customReducer,
   });

const createPersistedReducer = (
   platform: 'mobile' | 'web',
   whitelist: string[],
   blacklist: string[],
) =>
   persistReducer(
      {
         key: APP_NAME,
         storage: platform === 'web' ? storage : AsyncStorage,
         whitelist: ['app', ...whitelist],
         blacklist: [...blacklist],
      },
      createReducer(),
   );

const createStore = (
   platform: 'mobile' | 'web',
   whitelist: string[],
   blacklist: string[],
) =>
   configureStore({
      reducer: createPersistedReducer(platform, whitelist, blacklist),
      middleware(getDefaultMiddleware) {
         return getDefaultMiddleware({
            serializableCheck: false,
         });
      },
   });

const store = createStore('web', [], []);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export { createPersistedReducer, createStore };
