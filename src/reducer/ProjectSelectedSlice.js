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
    const progress = await progress_proyek(id);
    try {
      const response = await Api.get("/api/project/", {
        params: { id: id },
      });
      team = response.data.team;
      proyek.push(response.data);
      return { proyek: proyek, progress: progress, team: team };
    } catch (error) {}
  }
);

export const progress_proyek = async (props) => {
  let data;
  await Api.get(`/api/projectschedule/getprogress/${props}`).then((res) => {
    data = res.data;
  });
  return data;
};

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
  async ({ id_proyek, _id, item_pekerjaan }, thunkAPI) => {
    await Api.put("/api/projectschedule/delete", {
      id_proyek,
      _id,
      item_pekerjaan,
    });
    thunkAPI.dispatch(
      setNotification({
        type: "success",
        message: "Pekerjaan Berhasil Dihapus",
      })
    );
    return _id;
  }
);

// SM

export const tambahPenanggungJawab = createAsyncThunk(
  "projectselected/tambahpenanggungjawab",
  async ({ id_proyek, _id, data }, thunkAPI) => {
    let result;
    await Api.post(`/api/projectschedule/tambahpenanggungjawab/${id_proyek}`, {
      _id,
      data,
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
      }
    });
    return { id: _id, data: result };
  }
);

// SPV

export const mulaiPekerjaan = createAsyncThunk(
  "projectselected/mulaipekerjaan",
  async ({ id_proyek, _id }, thunkAPI) => {
    try {
      let result;
      await Api.post(`/api/projectschedule/mulaipekerjaan/${id_proyek}`, {
        _id: _id,
        status: "Dimulai",
      }).then((res) => {
        if (res.status === 200) {
          result = res.data;
          thunkAPI.dispatch(
            setNotification({
              type: "success",
              message: "Pekerjaan berhasil dimulai",
            })
          );
        }
      });
      return { id: _id, data: result };
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
  }
);

export const jedaPekerjaan = createAsyncThunk(
  "projectselected/jedapekerjaan",
  async ({ id_proyek, _id }, thunkAPI) => {
    let result;
    await Api.post(`/api/projectschedule/jedapekerjaan/${id_proyek}`, {
      _id: _id,
      status: "Dijeda",
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
        thunkAPI.dispatch(
          setNotification({
            type: "success",
            message: "Pekerjaan berhasil dijeda sementara",
          })
        );
      } else {
        thunkAPI.dispatch(
          setNotification({ type: "error", message: "Aksi gagal dilakukan" })
        );
      }
    });
    return { id: _id, data: result };
  }
);

export const selesaiPekerjaan = createAsyncThunk(
  "projectselected/selesaipekerjaan",
  async ({ id_proyek, _id }, thunkAPI) => {
    let result;
    await Api.post(`/api/projectschedule/selesaipekerjaan/${id_proyek}`, {
      _id: _id,
      status: "Selesai",
    }).then((res) => {
      if (res.status === 200) {
        result = res.data;
        thunkAPI.dispatch(
          setNotification({
            type: "success",
            message: "Pekerjaan berhasil diselesaikan",
          })
        );
      } else {
        thunkAPI.dispatch(
          setNotification({ type: "error", message: "Aksi gagal dilakukan" })
        );
      }
    });
    return { id: _id, data: result };
  }
);

// PTW

export const tambahPermitTowork = createAsyncThunk(
  "projectselected/tambahpermittowork",
  async ({ id_proyek, _id, data }, thunkAPI) => {
    let result;
    await Api.post(`/api/permittowork/${_id}`, { id_proyek, data }).then(
      (res) => {
        if (res.status === 200) {
          result = res.data;
          thunkAPI.dispatch(
            setNotification({
              type: "success",
              message: "Berhasil mengajukan permit pekerjaan",
            })
          );
        } else {
          thunkAPI.dispatch(
            setNotification({ type: "error", message: "Aksi gagal dilakukan" })
          );
        }
      }
    );
    return { id: result._id, data: result };
  }
);

// QS

export const updateVolume = createAsyncThunk(
  "projectselected/updatevolume",
  async ({ id_proyek, _id, volume, surveyor }, thunkAPI) => {
    try {
      let result;
      await Api.post(`/api/projectschedule/updatevolume/${id_proyek}`, {
        _id: _id,
        volume: volume,
        surveyor: surveyor,
      }).then((res) => {
        if (res.status === 200) {
          result = res.data;
          thunkAPI.dispatch(
            setNotification({
              type: "success",
              message: "Berhasil Mengupdate volume pekerjaan",
            })
          );
        }
      });
      const progress = await progress_proyek(id_proyek);
      return { id: _id, progress: progress, data: result };
    } catch (error) {}
  }
);

export const loadProgressKurvaS = createAsyncThunk(
  "projectselected/loadkurvas",
  async ({ id_proyek }, thunkAPI) => {
    try {
      let realisasi, rencana;
      await Api.get(`/api/project/progres/${id_proyek}`).then((res) => {
        realisasi = res.data;
      });
      await Api.get(`/api/projectschedule/getrencanaprogres/${id_proyek}`).then((res) => {
        rencana = res.data
      })
      return {realisasi, rencana};
    } catch (error) {}
  }
);

export const loadProgressKurvaSRencana = createAsyncThunk("projectselected/loadkurvasrencana", async ({id_proyek}, thunkAPI) => {
  try {
    let result
    await Api.get(`/api/projectschedule/getrencanaprogres/${id_proyek}`).then((res) => {
      result = res.data
    })
    return result
  } catch (error) {
    
  }
})

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
    progress: "0",
    team: teamEntity.getInitialState(),
    pekerjaan: pekerjaanEntity.getInitialState(),
    progreskurvas: {},
    progreskurvasrencana: {}
  }),
  reducers: {
    clearProjectSelected: (state, action) => {
      projectEntity.removeAll(state);
      teamEntity.removeAll(state.team);
      pekerjaanEntity.removeAll(state.pekerjaan);
      state.progreskurvas = {}
      state.progreskurvasrencana = {}
    },
  },
  extraReducers: {
    [loadProjectSelected.fulfilled]: (state, action) => {
      const payload = action.payload;
      projectEntity.setAll(state, payload.proyek);
      teamEntity.setAll(state.team, payload.team);
      state.progress = payload.progress;
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
      pekerjaanEntity.removeOne(state.pekerjaan, action.payload);
    },
    [tambahPenanggungJawab.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload.id,
        changes: payload.data,
      });
    },
    [mulaiPekerjaan.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload.id,
        changes: payload.data,
      });
    },
    [jedaPekerjaan.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload.id,
        changes: payload.data,
      });
    },
    [selesaiPekerjaan.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload.id,
        changes: payload.data,
      });
    },
    [updateVolume.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload.id,
        changes: payload.data,
      });
      state.progress = payload.progress;
    },
    [tambahPermitTowork.fulfilled]: (state, action) => {
      const payload = action.payload;
      pekerjaanEntity.updateOne(state.pekerjaan, {
        id: payload.id,
        changes: payload.data,
      });
    },
    [loadProgressKurvaS.fulfilled]: (state, action) => {
      const payload = action.payload;
      state.progreskurvas = payload.realisasi
      state.progreskurvasrencana = payload.rencana
    },
    [loadProgressKurvaSRencana.fulfilled]: (state, action) => {
      const payload = action.payload;
      state.progreskurvasrencana = payload;
    },
  },
});

export const projectSelectedSelector = projectEntity.getSelectors(
  (state) => state.projectselected
);
export const { selectById: projectSelectedSelectorById } =
  projectEntity.getSelectors((state) => state.projectselected);
export const projectSelectedSelectorTeam = teamEntity.getSelectors(
  (state) => state.projectselected.team
);
export const projectSelectedSelectorPekerjaan = teamEntity.getSelectors(
  (state) => state.projectselected.pekerjaan
);

export const progressProyekSelector = (state) => state.projectselected.progress;
export const progressKurvaSProyekSelector = (state) => state.projectselected.progreskurvas;
export const progressKurvaSRencanaProyekSelector = (state) => state.projectselected.progreskurvasrencana;

export const { clearProjectSelected } = projectSelectedSlice.actions;

export default projectSelectedSlice.reducer;
