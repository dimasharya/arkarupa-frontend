import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Api from "./Api";
import { setNotification } from "./NotificationSlice";
import { setMessage } from "./ValidationMessageSlice";

export const loadUserManagement = createAsyncThunk(
  "usermanagement/load",
  async (thunkApi) => {
    try {
      let result;
      await Api.get("/api/users/getalluser").then((res) => {
        if (res.status === 200) {
          result = res.data;
        }
      });
      return result;
    } catch (error) {
      thunkApi.dispatch(
        setNotification({ type: "error", message: error.response.data.msg })
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "usermanagement/registeruser",
  async ({ data }, thunkAPI) => {
    try {
      let result;
      await Api.post("/api/users/register", data).then((res) => {
        thunkAPI.dispatch(
          setMessage({ type: "success", message: "User berhasil didaftarkan" })
        );
        result = res.data;
      });
      return result;
    } catch (error) {
      let message;
      if (error.response) {
        error.response.data.errors.forEach((element) => {
          message = element.msg;
        });
        thunkAPI.dispatch(setMessage({ type: "error", message: message }));
        return thunkAPI.rejectWithValue();
      }
    }
  }
);

export const editUser = createAsyncThunk(
  "usermanagement/edit",
  async ({ _id, data }, thunkAPI) => {
    try {
      let result;
      await Api.put("/api/users/edit", { _id, data }).then((res) => {
        result = res.data;
        thunkAPI.dispatch(
          thunkAPI.dispatch(
            setMessage({ type: "success", message: "User berhasil diupdate" })
          )
        );
      });
      return result;
    } catch (error) {
      let message;
      if (error.response) {
        error.response.data.errors.forEach((element) => {
          message = element.msg;
        });
        thunkAPI.dispatch(setMessage({ type: "error", message: message }));
        return thunkAPI.rejectWithValue();
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  "usermanagement/delete",
  async ({ _id }, thunkApi) => {
    try {
      await Api.delete(`/api/users/delete/${_id}`);
      thunkApi.dispatch(
        setNotification({ type: "success", message: "User berhasil dihapus" })
      );
      return _id;
    } catch (error) {
      thunkApi.dispatch(
        setNotification({ type: "error", message: error.response.data.msg })
      );
    }
  }
);

const user = createEntityAdapter({
  selectId: (user) => user._id,
});

const userManagementSlice = createSlice({
  name: "usermanagement",
  initialState: user.getInitialState(),
  extraReducers: {
    [loadUserManagement.fulfilled]: (state, action) => {
      user.setAll(state, action.payload);
    },
    [registerUser.fulfilled]: (state, action) => {
      user.addOne(state, action.payload);
    },
    [editUser.fulfilled]: (state, action) => {
      user.updateOne(state, {
        id: action.payload._id,
        changes: action.payload,
      });
    },
    [deleteUser.fulfilled]: (state, action) => {
      user.removeOne(state, action.payload);
    },
  },
});

export const selectUserManagement = user.getSelectors(
  (state) => state.usermanagement
);

export default userManagementSlice.reducer;
