import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { clientsReducer, employmentReducer, projectReducer, projectsReducer, tagReducer } from './reducers/';

const composeEnhancers =
    (process.env.ENVIRONMENT === 'development' && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    combineReducers({
        clients: clientsReducer,
        employment: employmentReducer,
        project: projectReducer,
        projects: projectsReducer,
        tags: tagReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
);
