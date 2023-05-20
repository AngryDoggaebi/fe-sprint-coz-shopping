import { configureStore, createSlice } from '@reduxjs/toolkit'

let modal = createSlice({
  name: 'modal',
  initialState: { 'visible' : false },
  reducers: {
    changeModalState(state, trueOrFalse){
      state.visible = trueOrFalse.payload
    }
  }
})

let imageUrl = createSlice({
  name: 'imageUrl',
  initialState: { 'imageUrl' : '' },
  reducers: {
    setImgUrl(state, curUrl){
      state.url = curUrl.payload
    }
  }
})


export let { changeModalState } = modal.actions
export let { setImgUrl } = imageUrl.actions

export default configureStore({
  reducer: { 
    modal : modal.reducer,
    imageUrl : imageUrl.reducer,
  }
}) 
