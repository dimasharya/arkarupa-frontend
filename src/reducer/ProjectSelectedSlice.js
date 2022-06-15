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
    await Api.post("/api/project/addmember", {
      id,
      data,
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

const pekerjaanEntity = createEntityAdapter({
  selectId: (pekerjaan) => pekerjaan._id,
});

const teamEntity = createEntityAdapter({
  selectId: (team) => team.id,
});

const projectEntity = createEntityAdapter({
  selectId: (projectselected) => projectselected._id,
});

const projectSelectedSlice = createSlice({
  name: "projectselected",
  initialState: projectEntity.getInitialState({
    team: teamEntity.getInitialState(),
  }),
  extraReducers: {
    [loadProjectSelected.fulfilled]: (state, action) => {
      const payload = action.payload;
      projectEntity.setAll(state, payload.proyek);
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
  },
});

export const projectSelectedSelector = projectEntity.getSelectors(
  (state) => state.projectselected
);
export const projectSelectedSelectorTeam = teamEntity.getSelectors(
  (state) => state.projectselected.team
);
export default projectSelectedSlice.reducer;
