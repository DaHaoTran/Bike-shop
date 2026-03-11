import { configureStore } from '@reduxjs/toolkit'
import { bikeReducer } from '../features/bike/bikeSlice'

export default configureStore({
  reducer: {
    bike: bikeReducer,
  },
})