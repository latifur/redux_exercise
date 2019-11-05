import { AllRoomData } from "../data";

const initialState = {
  Rooms: AllRoomData
};

export const RoomReducer = (state = initialState.Rooms, action) => {
  return state;
};
