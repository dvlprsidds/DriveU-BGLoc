import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import EncryptedStorage from 'react-native-encrypted-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import locationReducer from './reducers/locationReducer';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
};

const reducers = combineReducers({
  location: locationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

setupListeners(store.dispatch);
