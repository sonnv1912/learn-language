import { APP_NAME } from '@packages/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
   type Reducer,
   combineReducers,
   configureStore,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appSlice } from './slices/app';
import { toastSlice } from './slices/toast';

const createReducer = (customReducer: Record<string, Reducer>) =>
   combineReducers({
      app: appSlice.reducer,
      toast: toastSlice.reducer,
      ...customReducer,
   });

const createPersistedReducer = (
   platform: 'mobile' | 'web',
   whitelist: string[],
   blacklist: string[],
   customReducer: Record<string, Reducer>,
) =>
   persistReducer(
      {
         key: APP_NAME,
         storage: platform === 'web' ? storage : AsyncStorage,
         whitelist: ['app', ...whitelist],
         blacklist: [...blacklist],
      },
      createReducer(customReducer),
   );

const createStore = (
   platform: 'mobile' | 'web',
   whitelist: string[],
   blacklist: string[],
   customReducer: Record<string, Reducer>,
) =>
   configureStore({
      reducer: createPersistedReducer(
         platform,
         whitelist,
         blacklist,
         customReducer,
      ),
      middleware(getDefaultMiddleware) {
         return getDefaultMiddleware({
            serializableCheck: false,
         });
      },
   });

export { createPersistedReducer, createStore };
