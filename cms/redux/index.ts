import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import { RESET_STATE_ACTION_TYPE } from './Global/reset';
import { setupListeners } from '@reduxjs/toolkit/query';
import { flowApi } from 'services/flowApi';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';

const reducers = {
  [flowApi.reducerPath]: flowApi.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

const persistConfig = {
  key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(flowApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch); // NOTE this addition

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;