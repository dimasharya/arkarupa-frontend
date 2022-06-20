import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import Api from "./Api";
import { setNotification } from "./NotificationSlice";

export const loadProjectSelected = createAsyncThunk(
  "projectselected/getProject",
  async ({ id }) => {
    let proyek = [],
      team;
    try {
      const response = await Api.get("/api/project/", {
        params: { id: id },
      });
      team = response.data.team;
      proyek.push(response.data);
      return { proyek: proyek, team: team };
    } catch (error) {}
  }
);

export const addTeam = createAsyncThunk(
  "projectselected/addTeam",
  async ({ id, data }, thunkAPI) => {
    let dataforapi = [];
    data.map((item) => {
      dataforapi.push(item._id);
    });
    await Api.post("/api/project/addmember", {
      id,
      dataforapi,
    });
    thunkAPI.dispatch(
      setNotification({
        type: "success",
        message: "User Berhasil Ditambahkan",
      })
    );
    return data;
  }
);

export const deleteTeam = createAsyncThunk(
  "projectselected/deleteTeam",
  async ({ id, userid }, thunkAPI) => {
    await Api.post("/api/project/deletemember", { id, userid });
    thunkAPI.dispatch(
      setNotification({ type: "success", message: "User Berhasil Dihapus" })
    );
    return userid;
  }
);

export const loadPekerjaan = createAsyncThunk(
  "projectselected/loadpekerjaan",
  async ({ id_proyek }, thunkAPI) => {
    let result;
    await Api.get(`/api/projectschedule/${id_proyek}`, {
      params: { status: "Semua" },
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
      }
    });
    return result;
  }
);

export const loadPekerjaanSpv = createAsyncThunk(
  "projectselected/loadpekerjaanspv",
  async ({ id_proyek, penanggung_jawab }, thunkAPI) => {
    let result;
    await Api.get(`/api/projectschedule/spv/${id_proyek}`, {
      params: { status: "Semua", penanggung_jawab: penanggung_jawab },
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
        console.log(result);
      }
    });
    return result;
  }
);

export const loadPekerjaanDijadwalkan = createAsyncThunk(
  "projectselected/loadpekerjaandijadwalkan",
  async ({ id_proyek }, thunkAPI) => {
    let result;
    await Api.get(`/api/projectschedule/${id_proyek}`, {
      params: { status: "Dijadwalkan" },
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
      } else {
        result = [];
      }
    });
    return result;
  }
);

export const loadPekerjaanBerlangsung = createAsyncThunk(
  "projectselected/loadpekerjaandijadwalkan",
  async ({ id_proyek }, thunkAPI) => {
    let result = [];
    await Api.get(`/api/projectschedule/${id_proyek}`, {
      params: { status: "Dimulai" },
    }).then((res) => {
      if (res.status === 200) {
        result.push(res.data);
      }
    });
    await Api.get(`/api/projectschedule/${id_proyek}`, {
      params: { status: "Dijeda" },
    }).then((res) => {
      if (res.status === 200) {
        result.push(res.data);
      }
    });
    return result;
  }
);

export const loadPekerjaanSelesai = createAsyncThunk(
  "projectselected/loadpekerjaandijadwalkan",
  async ({ id_proyek }, thunkAPI) => {
    let result;
    await Api.get(`/api/projectschedule/${id_proyek}`, {
      params: { status: "Selesai" },
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
      } else {
        result = [];
      }
    });
    return result;
  }
);

export const addPekerjaan = createAsyncThunk(
  "projectselected/addpekerjaan",
  async ({ id_proyek, data }, thunkAPI) => {
    let result;
    await Api.post("/api/projectschedule/tambah", { id_proyek, data }).then(
      (res) => {
        if (res.status === 200) {
          const data = res.data;
          let pekerjaan = data.jadwal_proyek;
          pekerjaan = pekerjaan[pekerjaan.length - 1];
          result = pekerjaan;
        }
      }
    );
    thunkAPI.dispatch(
      setNotification({
        type: "success",
        message: "Pekerjaan Berhasil Ditambahkan",
      })
    );
    return result;
  }
);

export const editPekerjaan = createAsyncThunk(
  "projectselected/editpekerjaan",
  async ({ id_proyek, data }, thunkAPI) => {
    let result;
    await Api.put("/api/projectschedule/edit", { id_proyek, data }).then(
      (res) => {
        if (res.status === 200) {
          const rst = res.data;
          result = rst.jadwal_proyek.find(
            (item) => item.item_pekerjaan === data.item_pekerjaan
          );
        }
      }
    );
    thunkAPI.dispatch(
      setNotification({
        type: "success",
        message: "Pekerjaan Berhasil Diupdate",
      })
    );
    return result;
  }
);

export const deletePekerjaan = createAsyncThunk(
  "projectselected/deletepekerjaan",
  async ({ id_proyek, _id,  item_pekerjaan }, thunkAPI) => {
    await Api.put("/api/projectschedule/delete", { id_proyek, _id, item_pekerjaan });
    thunkAPI.dispatch(
      setNotification({
        type: "success",
        message: "Pekerjaan Berhasil Dihapus",
      })
    );
    return _id;
  }
);

const pekerjaanEntity = createEntityAdapter({
  selectId: (pekerjaan) => pekerjaan._id,
});

const teamEntity = createEntityAdapter({
  selectId: (team) => team._id,
});

const projectEntity = createEntityAdapter({
  selectId: (projectselected) => projectselected._id,
});

const projectSelectedSlice = createSlice({
  name: "projectselected",
  initialState: projectEntity.getInitialState({
    team: teamEntity.getInitialState(),
    pekerjaan: pekerjaanEntity.getInitialState(),
  }),
  reducers: {
    clearProjectSelected: (state, action) =>  {
      projectEntity.removeAll(state)
      teamEntity.removeAll(state.team)
      pekerjaanEntity.removeAll(state.pekerjaan)
    }
  },
  extraReducers: {
    [loadProjectSelected.fulfilled]: (state, action) => {
      const payload = action.payload;
      projectEntity.setAll(state, payload.proyek);
      // console.log(payload.proyek);
      // console.log(payload.team);
      teamEntity.setAll(state.team, payload.team);
    },
    [addTeam.fulfilled]: (state, action) => {
      const payload = action.payload;
      teamEntity.addMany(state.team, payload);
    },
    [deleteTeam.fulfilled]: (state, action) => {
      const payload = action.payload;
      teamEntity.removeOne(state.team, payload);
    },
    [loadPekerjaan.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.setAll(state.pekerjaan, payload);
    },
    [loadPekerjaanSpv.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.setAll(state.pekerjaan, payload);
    },
    [addPekerjaan.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.setOne(state.pekerjaan, payload);
    },
    [editPekerjaan.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload._id,
        changes: payload,
      });
    },
    [deletePekerjaan.fulfilled]: (state, action) => {
      console.log(action.payload);
      pekerjaanEntity.removeOne(state.pekerjaan, action.payload)
    }
  },
});

export const projectSelectedSelector = projectEntity.getSelectors(
  (state) => state.projectselected
);
export const { selectById: projectSelectedSelectorById } =
  projectEntity.getSelectors(
    (state) => state.projectselected
  );
export const projectSelectedSelectorTeam = teamEntity.getSelectors(
  (state) => state.projectselected.team
);
export const projectSelectedSelectorPekerjaan = teamEntity.getSelectors(
  (state) => state.projectselected.pekerjaan
);

export const {clearProjectSelected} = projectSelectedSlice.actions

export default projectSelectedSlice.reducer;
