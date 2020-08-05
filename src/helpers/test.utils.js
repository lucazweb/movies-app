import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// movies only store based
import { initialState as movies } from '../store/movies';
import { initialState as ui } from '../store/user-interface';
import rootReducer from '../store/rootReducer';

const INITIAL_STATE = {
  movies,
  ui,
};

function render(
  ui,
  {
    initialState = INITIAL_STATE,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
// overide render method;
export { render };
