import { createStore,combineReducers} from 'redux'
import { authReducer} from './reducers/authReducer'
import { messagesReducer } from './reducers/messagesReducer'
import { nameReducer} from './reducers/nameReducer'
import {roomReducer} from './reducers/roomReducer'


const reducers = combineReducers({
  isAuth:authReducer,
  name:nameReducer,
  messages:messagesReducer,
  room:roomReducer
})

let store = createStore(reducers)



export default store