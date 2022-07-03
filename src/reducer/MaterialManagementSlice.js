import {createSlice, createEntityAdapter, createAsyncThunk} from "@reduxjs/toolkit"
import Api from "./Api"

export const loadMaterialManagement = createAsyncThunk("itemmanagement/load", async () => {
    try {
        let result
        await Api.get("/api/projectbudgetmanagement/material/getall").then((res) => {
            result = res.data
        })
        return result
    } catch (error) {
        
    }
} )

const MaterialEntity = createEntityAdapter({
    selectId: material => material._id
})

const MaterialManagementSlice = createSlice({
    name: "materialmanagement",
    initialState: MaterialEntity.getInitialState(),
    extraReducers: {
        [loadMaterialManagement.fulfilled]: (state, action) => {
            MaterialEntity.setAll(state, action.payload)
        }
    }
})

export const MaterialSelector = MaterialEntity.getSelectors((state) => state.materialmanagement)

export default MaterialManagementSlice.reducer