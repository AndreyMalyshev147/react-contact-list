import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { navMenuReducer } from './reducers/navMenuReducer';
import { contactsReducer } from './reducers/contactsReduces';
import { formsReducer } from './reducers/formsReducer';
import { searchReducer } from './reducers/searchReducer';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  status: navMenuReducer,
  contacts: contactsReducer,
  inputs: formsReducer,
  searchValue: searchReducer
});

const persistedStore = loadFromLocalStorage();

export const store = createStore(rootReducer, persistedStore , composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
