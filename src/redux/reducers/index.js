import { combineReducers } from "redux";
import { PhoneReducer } from "./phoneReducer";
import { RoomReducer } from "./roomReducer";
import { CartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  Phone: PhoneReducer,
  Room: RoomReducer,
  Cart: CartReducer
});
