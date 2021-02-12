import {createStore, combineReducers} from 'redux'
import { usersReducer } from './reducers/usersReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/authReducer';
import {profileReducer} from './reducers/profileReducer';


const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
    profile: profileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
