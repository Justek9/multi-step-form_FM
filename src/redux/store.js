import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import formReducer from './formRedux'

import initialState from './initialState'
import stepReducer from './stepRedux'

const subReducers = {
	step: stepReducer,
	form: formReducer,
}

const reducer = combineReducers(subReducers)
const store = createStore(reducer, initialState)

export default store
