import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import history from '../history'
import {routerMiddleware} from 'connected-react-router'
let middleware = routerMiddleware(history)
export default applyMiddleware(middleware)(createStore)(reducer)