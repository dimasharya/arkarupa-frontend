import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Api from "./Api";
import { setNotification } from "./NotificationSlice";
import { loadProjectBudget } from "./ProjectBudgetSlice";

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
    let id, ra, terakhir_diubah;
    await Api.post("/api/projectbudget/addrencanaanggaran", {
      id_anggaran,
      data,
    }).then((res) => {
      const data = res.data;
      terakhir_diubah = data.terakhir_diubah
      id = data._id
      const rancangan_anggaran = data.rancangan_anggaran;
      const idx = rancangan_anggaran.length;
      ra = rancangan_anggaran[idx - 1];
      thunkAPI.dispatch(setNotification({type: "success", message: "Data Berhasil Ditambahkan"}))
      thunkAPI.dispatch(loadProjectBudget())
    });
    return {id, ra, terakhir_diubah};
  }
);

export const updateRancanganAnggaran = createAsyncThunk(
  "projectbudgetselected/updaterancangananggaran",
  async ({ id_anggaran, data }, thunkAPI) => {
      let id, terakhir_diubah
    await Api.put("/api/projectbudget/updaterencanaanggaran", {
      id_anggaran,
      data,
    }).then((res) => {
    const data = res.data;
      terakhir_diubah = data.terakhir_diubah
      id = data._id
      thunkAPI.dispatch(setNotification({type: "success", message: "Data Berhasil Diperbarui"}))
      thunkAPI.dispatch(loadProjectBudget())
    });
    return {id, data, terakhir_diubah};
  }
);

export const deleteRancanganAnggaran = createAsyncThunk(
  "projectbudgetselected/deleterancangananggaran",
  async ({ id_anggaran, _id }, thunkAPI) => {
    let id, terakhir_diubah
    await Api.put("/api/projectbudget/deleterencanaangaran", {
      id_anggaran,
      _id,
    }).then((res) => {
        const data = res.data;
      terakhir_diubah = data.terakhir_diubah
      id = data._id
      thunkAPI.dispatch(setNotification({type: "success", message: "Data Berhasil Dihapus"}))
      thunkAPI.dispatch(loadProjectBudget())
    })
    return {id, _id, terakhir_diubah};
  }
);

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
      projectBudgetSelectedEntity.removeAll(state);
      rancanganAnggaranEntity.removeAll(state.rancanganAnggaran);
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
      rancanganAnggaranEntity.addOne(state.rancanganAnggaran, action.payload.ra);
      projectBudgetSelectedEntity.updateOne(state, {id : action.payload.id, changes : {terakhir_diubah: action.payload.terakhir_diubah}})
    },
    [updateRancanganAnggaran.fulfilled]: (state, action) => {
      rancanganAnggaranEntity.updateOne(state.rancanganAnggaran, {
        id: action.payload.data._id,
        changes: action.payload.data,
      });
      projectBudgetSelectedEntity.updateOne(state, {id : action.payload.id, changes : {terakhir_diubah: action.payload.terakhir_diubah}})
    },
    [deleteRancanganAnggaran.fulfilled]: (state, action) => {
      rancanganAnggaranEntity.removeOne(
        state.rancanganAnggaran,
        action.payload._id
      );
      projectBudgetSelectedEntity.updateOne(state, {id : action.payload.id, changes : {terakhir_diubah: action.payload.terakhir_diubah}})
    },
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
