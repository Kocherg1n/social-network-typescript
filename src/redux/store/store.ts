import {createStore, combineReducers} from 'redux'
import { usersReducer } from './reducers/usersReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/authReducer';


const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
