import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import initialState from './initialState'
import stepReducer from './stepRedux'

const subReducers = {
	step: stepReducer,
}

const reducer = combineReducers(subReducers)
const store = createStore(reducer, initialState)

export default store
