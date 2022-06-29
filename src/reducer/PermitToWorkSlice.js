import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import Api from "./Api";
import { setNotification } from "./NotificationSlice";

export const loadPermitToWorkSpv = createAsyncThunk(
  "projectselected/loadpermittoworkspv",
  async ({ id_user }, thunkAPI) => {
    let result;
    await Api.get(`/api/permittowork/spv/${id_user}`).then((res) => {
      if (res.status === 200) {
        result = res.data;
        console.log(result);
      } else {
        thunkAPI.dispatch(
          setNotification({ type: "error", message: "Aksi gagal dilakukan" })
        );
      }
    });
    return result;
  }
);

export const loadPermitToWorkSm = createAsyncThunk(
  "permittowork/loadpermittoworksm",
  async ({ id_user }, thunkAPI) => {
    let result;
    await Api.get(`/api/permittowork/sm/${id_user}`).then((res) => {
      if (res.status === 200) {
        result = res.data;
      } else {
        thunkAPI.dispatch(
          setNotification({ type: "error", message: "Aksi gagal dilakukan" })
        );
      }
    });
    return result;
  }
);

export const validasiPermitToWork = createAsyncThunk(
  "permittowork/validasi",
  async ({ _id, data }, thunkAPI) => {
    try {
      let result;
      await Api.put(`/api/permittowork/${_id}`, {
        data: data,
        status: "Disetujui",
      }).then((res) => {
        if (res.status === 200) {
          result = res.data;
          thunkAPI.dispatch(
            setNotification({
              type: "success",
              message: "Permit to work berhasil di validasi",
            })
          );
        }
      });
      return result;
    } catch (error) {
      thunkAPI.dispatch(
        setNotification({ type: "error", message: "Aksi gagal dilakukan" })
      );
    }
  }
);

export const tolakPermitToWork = createAsyncThunk(
  "permittowork/tolak",
  async ({ _id }, thunkAPI) => {
    try {
      let result;
      await Api.put(`/api/permittowork/${_id}`, { status: "Ditolak" }).then(
        (res) => {
          if (res.status === 200) {
            result = res.data;
            thunkAPI.dispatch(
              setNotification({
                type: "success",
                message: "Permit to work berhasil di tolak",
              })
            );
          }
          return result;
        }
      );
    } catch (error) {
      thunkAPI.dispatch(
        setNotification({ type: "error", message: "Aksi gagal dilakukan" })
      );
    }
  }
);

const permitToWorkEntity = createEntityAdapter({
  selectId: (ptw) => ptw._id,
});

const permitToWorkSlice = createSlice({
  name: "permittowork",
  initialState: permitToWorkEntity.getInitialState(),
  extraReducers: {
    [loadPermitToWorkSpv.fulfilled]: (state, action) => {
      const payload = action.payload;
      permitToWorkEntity.setAll(state, payload);
    },
    [loadPermitToWorkSm.fulfilled]: (state, action) => {
      const payload = action.payload;
      permitToWorkEntity.setAll(state, payload);
    },
    [validasiPermitToWork.fulfilled]: (state, action) => {
      const payload = action.payload;
      permitToWorkEntity.updateOne(state, {
        id: payload._id,
        changes: payload,
      });
    },
    [tolakPermitToWork.fulfilled]: (state, action) => {
      const payload = action.payload;
      permitToWorkEntity.updateOne(state, {
        id: payload._id,
        changes: payload,
      });
    },
  },
});

export const permitToWorkSelector = permitToWorkEntity.getSelectors(
  (state) => state.permittowork
);

export default permitToWorkSlice.reducer;
