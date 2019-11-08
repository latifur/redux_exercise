import { AllUserData } from "../data";

const initialState = {
  loginStatus: false,
  userInfo: AllUserData,
  currentUserName: "Demo User"
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      const matchUser = state.userInfo.find(
        result => result.username == action.payload.userName
      );

      let goLogin = false;
      let currentUserName = state.currentUserName;
      if (matchUser) {
        if (matchUser.address.zipcode === action.payload.password) {
          currentUserName = matchUser.name;
          goLogin = true;
        } else {
          alert("password is not matched");
        }
      }

      const newState = {
        loginStatus: goLogin,
        userInfo: AllUserData,
        currentUserName: currentUserName
      };

      console.log(matchUser);
      state = newState;
      return state;
    }
    case "LOG_OUT": {
      state = initialState;
      return state;
    }
    default:
      return state;
  }
};
