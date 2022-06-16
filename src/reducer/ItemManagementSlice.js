import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit"
import Api from "./Api"

export const loadItem = createAsyncThunk("itemmanagement/loaditem", async () => {
    let result;
    await Api.get("/api/itemmanagement/itempekerjaan/getall").then((res) => {
        result = res.data
    })
    return result
})

const itemEntity = createEntityAdapter({
    selectId: item => item._id
})

const materialEntity = createEntityAdapter({
    selectId: material => material._id
})

const ItemManagementSlice = createSlice({
    name: "itemmanagement",
    initialState: itemEntity.getInitialState({
        itemForEdit: materialEntity.getInitialState()
    }),
    extraReducers:{
        [loadItem.fulfilled]: (state, action) => {
            itemEntity.setAll(state, action.payload)
        }
    }
})

export default ItemManagementSlice.reducer