import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import pacmanReducer from '../Pacman/pacmanReducer'
import thunk from 'redux-thunk'
import mapReducer from '../Map/mapReducer'

const rootReducer = combineReducers({
  pacman: pacmanReducer,
  map: mapReducer,
})

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
)

export default store