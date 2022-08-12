import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts/contacts-reducers';

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export { store };
