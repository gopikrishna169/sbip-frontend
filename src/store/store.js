import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const { createLogger } = require('redux-logger');

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

const logger = createLogger({
  level: 'log',
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: true,
  timestamp: true,
  stateTransformer: (state) => state,
  errorTransformer: (error) => error,
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
  diff: false,
  diffPredicate: undefined
});
middlewares.push(logger);

middlewares.push(sagaMiddleware);

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);
