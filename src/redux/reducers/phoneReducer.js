import React from "react";
import { AllData } from "../data";
import update from "react-addons-update";

const initialState = {
  Phones: AllData
};

export const PhoneReducer = (state = initialState.Phones, action) => {
  switch (action.type) {
    case "BUY_PRODUCT": {
      console.log("product Has beed add to cart", action.payload);

      return state;
    }

    default: {
      console.log("this is default state");
      return state;
    }
  }
};
