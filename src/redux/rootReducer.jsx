import { combineReducers } from "rudux" ;
import { TodoReducer } from "./todoucer";
import { LikeReducer } from "./likeReducer";

export const rootReducer = combineReducers({
    todo:TodoReducer,
    leke:LikeReducer
})