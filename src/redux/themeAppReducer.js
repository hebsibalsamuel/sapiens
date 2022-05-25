import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "themeApp",
  initialState: {
    isLoggedIn: false,
    currentTheme: 'none',
    userName:'',  
    userData:{}  
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = action.payload.canLogin;
      state.userName=action.payload.username;
    },
    changeTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    }

  },
});

export const { logIn, changeTheme,setUserData  } = ThemeSlice.actions;
export default ThemeSlice.reducer;