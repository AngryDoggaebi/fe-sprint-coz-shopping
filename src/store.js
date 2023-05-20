import { configureStore, createSlice } from '@reduxjs/toolkit'

let modal = createSlice({
  name: 'modal',
  initialState: false
})

let imageUrl = createSlice({
  name: 'imageUrl',
  initialState: ''
})

export default configureStore({
  reducer: { 
    modal : modal.reducer,
    imageUrl : imageUrl.reducer
  }
}) 
