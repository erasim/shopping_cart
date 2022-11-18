import { combineReducers } from "redux";
import amountReduser from "./amountReduser";
import cartitems from "./cartReduser";




const reducerss=combineReducers({
    amount:amountReduser,
    inputarr:cartitems,
  


})

export default reducerss