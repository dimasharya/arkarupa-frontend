import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import Api from "./Api";
import { setNotification } from "./NotificationSlice";

export const loadUserProject = createAsyncThunk(
  "project/getUserProject",
  async ({ id }) => {
    try {
      let response = await Api.get("/api/project/userproject", {
        params: { userId: id },
      });
      response = response.data;
      return response;
    } catch (error) {}
  }
);

export const tambahProyekBaru = createAsyncThunk(
  "project/addnewproject",
  async (formData, thunkAPI) => {
    try {
      let result;
      await Api.post("/api/project", formData).then((res) => {
        result = res.data;
      });
      thunkAPI.dispatch(
        setNotification({ type: "success", message: "Proyek baru berhasil ditambah" })
      );
      return result;
    } catch (error) {
      thunkAPI.dispatch(
        setNotification({ type: "error", message: error.response.data.msg })
      );
      return thunkAPI.rejectWithValue()
    }
  }
);

const projectEntity = createEntityAdapter({
  selectId: (project) => project._id,
});

const ProjectSlice = createSlice({
  name: "userproject",
  initialState: projectEntity.getInitialState({
    total_proyek: 0,
    proyek_berlangsung: 0,
    proyek_selesai: 0,
    pekerja: 0,
  }),
  extraReducers: {
    [loadUserProject.fulfilled]: (state, action) => {
      const project = action.payload;
      projectEntity.setAll(state, project);
      state.total_proyek = project.length;
      state.proyek_berlangsung = project.filter(
        (el) => el.status === "Belum Dimulai"
      ).length;
      state.proyek_selesai = project.filter(
        (el) => el.status === "Selesai"
      ).length;
    },
    [tambahProyekBaru.fulfilled]: (state, action) => {
      const payload = action.payload
      projectEntity.addOne(state, payload)
    }
  },
});

export const projectSelectors = projectEntity.getSelectors(
  (state) => state.userproject
);
export const selectProject = (state) => state.userproject;

export default ProjectSlice.reducer;
