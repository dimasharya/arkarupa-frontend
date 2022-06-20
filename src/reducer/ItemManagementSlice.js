import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit"
import Api from "./Api"
import { setNotification } from "./NotificationSlice";

export const loadItem = createAsyncThunk("itemmanagement/loaditem", async () => {
    let result;
    await Api.get("/api/projectbudgetmanagement/itempekerjaan/getall").then((res) => {
        result = res.data
    })
    return result
})

export const deleteItem = createAsyncThunk("itemmanagement/deleteitem", async ({id_item} , thunkApi) => {
    await Api.put("/api/projectbudgetmanagement/itempekerjaan/delete", {id_item}).then((res) => {
        if(res.status === 200){
            thunkApi.dispatch(setNotification({type: "success", message: "Data berhasil hapus"}))
        }
    })
    return id_item
})

export const updateItem = createAsyncThunk("itemmanagement/updateitem", async ({data}, thunkApi) => {
    let result
    await Api.put("/api/projectbudgetmanagement/itempekerjaan/update", {data}).then((res) => {
        if(res.status === 200){
            result = res.data
            thunkApi.dispatch(setNotification({type: "success", message: "Data berhasil diupdate"}))
        }
    })
    return result
})

export const tambahItem = createAsyncThunk("itemmanagement/tambahitem", async ({data} , thunkApi) => {
    let result
    await Api.post("/api/projectbudgetmanagement/itempekerjaan", {data}).then((res) => {
        if(res.status === 200) {
            result =  res.data
            thunkApi.dispatch(setNotification({type: "success", message: "Data berhasil ditambah"}))
        }
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
        material: materialEntity.getInitialState()
    }),
    extraReducers:{
        [loadItem.fulfilled]: (state, action) => {
            itemEntity.setAll(state, action.payload)
        },
        [deleteItem.fulfilled]: (state, action) => {
            itemEntity.removeOne(state, action.payload)
        },
        [tambahItem.fulfilled]: (state, action) => {
            itemEntity.addOne(state, action.payload)
        },
        [updateItem.fulfilled]: (state, action) => {
            itemEntity.updateOne(state, {id: action.payload._id, changes: action.payload})
        }
    }
})

export const selectItem = itemEntity.getSelectors((state) => state.itemmanagement)
export const selectMaterial = materialEntity.getSelectors((state) => state.itemmanagement.material)

export default ItemManagementSlice.reducer