import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/redux/authReducer";


export const store = configureStore({
  reducer : {
      auth : authReducer
  },
  devTools : true
})
