import { createStore,applyMiddleware,combineReducers } from 'redux'
import {todoApp} from './reducers'
import {personfn} from '../containers/person/index'
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    he:todoApp,
    rens:personfn
})
export default createStore(allReducer,applyMiddleware(thunk))