import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { cartReducer } from "./reducers/cart";
import { userReducer } from "./reducers/user";
import { wishListReducer } from "./reducers/wishList";



const rootReducers = combineReducers({
	cart: cartReducer,
	user: userReducer,
	wishList: wishListReducer,
})

const middlewares = [ReduxThunk, logger];

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store