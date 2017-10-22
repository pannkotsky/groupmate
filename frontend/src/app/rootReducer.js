import {combineReducers} from "redux";

import alerts from "app/reducers/alerts";
import users from "app/users/reducers";


export default combineReducers({
    alerts,
    users
});
