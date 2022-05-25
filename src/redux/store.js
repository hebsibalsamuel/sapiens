import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ThemeAppReducer from "./themeAppReducer";

const rootReducer = combineReducers({ themeApp: ThemeAppReducer });


export const store = configureStore({
  reducer: rootReducer
});

