// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { persistedUserDetailsReducer } from './UserDetailsReducer';
import { persistStore } from 'redux-persist';
const rootReducer = combineReducers({
  auth: authReducer,
  userDetails:persistedUserDetailsReducer,
});
const ReduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'], // Ignore the persist/PERSIST action
    },
  }),
});
 export const persistor = persistStore(ReduxStore);
export default ReduxStore;
