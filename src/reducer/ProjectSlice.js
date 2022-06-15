import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import Api from "./Api";

export const loadUserProject = createAsyncThunk(
  "project/getUserProject",
  async ({ id }) => {
    try {
      const response = await Api.get("/api/project/userproject", {
        params: { userId: id },
      });
      return response.data;
    } catch (error) {}
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
  },
});

export const projectSelectors = projectEntity.getSelectors(
  (state) => state.userproject
);
export const selectProject = (state) => state.userproject

export default ProjectSlice.reducer;
