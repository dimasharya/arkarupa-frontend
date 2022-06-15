import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Api from "./Api";
import { setNotification } from "./NotificationSlice";

export const loadProjectBudget = createAsyncThunk(
  "projectbudget/load",
  async () => {
    const result = await Api.get("/api/projectbudget");
    if (result) {
      return result.data;
    }
  }
);

export const addProjectBudget = createAsyncThunk(
  "projectbudget/addprojectbudget",
  async ({ nama_proyek, id_proyek }, thunkAPI) => {
    let result;
    await Api.post("/api/projectbudget", { nama_proyek, id_proyek }).then(
      (res) => {
        result = res.data;
        thunkAPI.dispatch(
          setNotification({
            type: "success",
            message: "Rancangan Anggaran Biaya Ditambahkan",
          })
        );
      }
    );
    return result
  }
);

const projectBudgetEntity = createEntityAdapter({
  selectId: (project) => project._id,
});

const projectBudgetSlice = createSlice({
  name: "projectbudget",
  initialState: projectBudgetEntity.getInitialState(),
  extraReducers: {
    [loadProjectBudget.fulfilled]: (state, action) => {
      projectBudgetEntity.setAll(state, action.payload);
    },
    [addProjectBudget.fulfilled]: (state, action) => {
      projectBudgetEntity.addOne(state, action.payload);
    },
  },
});

export const projectBudgetSelector = projectBudgetEntity.getSelectors(
  (state) => state.projectbudget
);

export default projectBudgetSlice.reducer;
