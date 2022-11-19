import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import handleArr from './arrStatus/reducer';
import handleNum from './numberStatus/reducer';

const reducers = combineReducers({
  handleArr,
  handleNum,
})
// 创建数据仓库
// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose //rt

const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store;