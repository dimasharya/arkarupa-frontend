import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setNotification } from "./NotificationSlice";
import Api from "./Api";
import setAuthToken from "../utils/setAuthToken";
import { loadUserProject } from "./ProjectSlice";

// let user = localStorage.getItem("theArkarupaSecureAuth")
//   ? JSON.parse(localStorage.getItem("theArkarupaSecureAuth")).user
//   : "";

export const login = createAsyncThunk(
  "auth/requestlogin",
  async ({ email, password }, thunkAPI) => {
    let token = "";
    try {
      const response = await Api.post("/api/auth", { email, password });
      if (response) {
        const data = response.data.token;
        localStorage.setItem(
          "theArkarupaSecureAuth",
          JSON.stringify({ token: data })
        );
        token = data;
        await thunkAPI.dispatch(loadUser());
        thunkAPI.dispatch(
          setNotification({ type: "success", message: "Berhasil Login!" })
        );
      }
    } catch (error) {
      let message;
      if (error.response) {
        error.response.data.errors.forEach((element) => {
          message = element.msg;
        });
        thunkAPI.dispatch(setNotification({ type: "error", message: message }));
        return thunkAPI.rejectWithValue();
      }
    }
    return { token: token };
  }
);

export const loadUser = createAsyncThunk(
  "auth/requestloaduser",
  async (thunkAPI) => {
    const token = JSON.parse(
      localStorage.getItem("theArkarupaSecureAuth")
    ).token;
    if (token) {
      setAuthToken(token);
    }

    try {
      const response = await Api.get("/api/auth");
      if (response) {
        return response.data;
      }
    } catch (error) {
      let message;
      if (error.response) {
        error.response.data.errors.forEach((element) => {
          message = element.msg;
        });
        thunkAPI.dispatch(setNotification({ type: "error", message: message }));
      }
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async => {
  localStorage.removeItem("theArkarupaSecureAuth")
  
});

let token = localStorage.getItem("theArkarupaSecureAuth")
  ? JSON.parse(localStorage.getItem("theArkarupaSecureAuth")).token
  : "";

const initialState = {
  token: "" || token,
  user: "",
};

//const authEntity = createEntityAdapter()

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
    },
    [login.rejected]: (state, action) => {
      state.token = "";
    },
    [loadUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [logout.fulfilled]: (state) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const selectUser = (state) => state.auth.user;
export default AuthSlice.reducer;
