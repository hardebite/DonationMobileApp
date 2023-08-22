import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import User from './reducers/User';
import {persistReducer, persistStore} from 'redux-persist';
import Categories from './reducers/Categories';
import Donations from './reducers/Donation';
const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
    // .concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
// persistor.purge() to purge
