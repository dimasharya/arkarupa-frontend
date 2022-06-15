import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Api from "./Api";

export const loadProjectBudgetSelected = createAsyncThunk(
  "projectbudgetselected/load",
  async ({ projectId }, thunkAPI) => {
    const result = await Api.get("/api/projectbudget/projectbyid", {
      params: { projectId: projectId },
    });
    if (result.status === 200) {
      return result.data;
    }
  }
);

export const addRancanganAnggaran = createAsyncThunk(
  "projectbudgetselected/addrancangananggaran",
  async ({ id_anggaran, data }, thunkAPI) => {
    let result;
    await Api.post("/api/projectbudget/addrencanaanggaran", {
      id_anggaran,
      data,
    }).then((res) => {
      const data = res.data;
      const rancangan_anggaran = data.rancangan_anggaran;
      const idx = rancangan_anggaran.length;
      result = rancangan_anggaran[idx - 1];
    });
    return result;
  }
);

export const updateRancanganAnggaran = createAsyncThunk(
    "projectbudgetselected/updaterancangananggaran", async ({id_anggaran, data}, thunkAPI) => {
        return data
    }
)

export const deleteRancanganAnggaran = createAsyncThunk(
    "projectbudgetselected/deleterancangananggaran", async ({id_anggaran, _id}, thunkAPI) => {
        return _id
    }
)

const projectBudgetSelectedEntity = createEntityAdapter({
  selectId: (projectbudgetselected) => projectbudgetselected._id,
});

const rancanganAnggaranEntity = createEntityAdapter({
  selectId: (rancanganAnggaran) => rancanganAnggaran._id,
});

const ProjectBudgetSelectedSlice = createSlice({
  name: "projectbudgetselected",
  initialState: projectBudgetSelectedEntity.getInitialState({
    rancanganAnggaran: rancanganAnggaranEntity.getInitialState(),
  }),
  reducers: {
    clearProjectBudgetSelected: (state, action) => {
      projectBudgetSelectedEntity.removeAll(state)
      rancanganAnggaranEntity.removeAll(state.rancanganAnggaran)
    },
  },
  extraReducers: {
    [loadProjectBudgetSelected.fulfilled]: (state, action) => {
      projectBudgetSelectedEntity.setOne(state, action.payload);
      rancanganAnggaranEntity.setAll(
        state.rancanganAnggaran,
        action.payload.rancangan_anggaran
      );
    },
    [addRancanganAnggaran.fulfilled]: (state, action) => {
      rancanganAnggaranEntity.addOne(state.rancanganAnggaran, action.payload);
    },
    [updateRancanganAnggaran.fulfilled]: (state, action) => {
        rancanganAnggaranEntity.updateOne(state.rancanganAnggaran, {id: action.payload._id, changes: action.payload})
    },
    [deleteRancanganAnggaran.fulfilled]: (state, action) => {
        rancanganAnggaranEntity.removeOne(state.rancanganAnggaran, action.payload)
    }
  },
});

export const { selectById: projectBudgetSelectedSelectorById } =
  projectBudgetSelectedEntity.getSelectors(
    (state) => state.projectbudgetselected
  );
export const { selectAll: rancanganAnggaranSelectorAll } =
  rancanganAnggaranEntity.getSelectors(
    (state) => state.projectbudgetselected.rancanganAnggaran
  );

export const { clearProjectBudgetSelected } =
  ProjectBudgetSelectedSlice.actions;
export default ProjectBudgetSelectedSlice.reducer;
