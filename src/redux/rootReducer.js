import { combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';


// key value pair
const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
})

export default rootReducer;
