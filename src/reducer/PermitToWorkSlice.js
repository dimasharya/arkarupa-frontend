import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit"
import Api from "./Api"
import { setNotification } from "./NotificationSlice"

export const loadPermitToWorkSpv = createAsyncThunk("projectselected/loadpermittowork", async ({id_user}, thunkAPI) => {
    let result
    await Api.get(`/api/permittowork/spv/${id_user}`).then((res) => {
      if(res.status === 200){
        result = res.data
        console.log(result);
      }else{
        thunkAPI.dispatch(setNotification({type: "error", message: "Aksi gagal dilakukan"}))
      }
    })
    return result
  })

  const permitToWorkEntity = createEntityAdapter({
    selectId: (ptw) => ptw._id
  })

const permitToWorkSlice = createSlice({
    name: "permittowork",
    initialState: permitToWorkEntity.getInitialState() ,
    extraReducers: {
    [loadPermitToWorkSpv.fulfilled]: (state, action) => {
        const payload = action.payload
        permitToWorkEntity.setAll(state, payload)
      },
    }
})

export const permitToWorkSelector = permitToWorkEntity.getSelectors((state) => state.permittowork)

export default permitToWorkSlice.reducer