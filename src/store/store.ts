import { configureStore } from '@reduxjs/toolkit'
import studentsSlice from './slices/studentsSlice'
import appSlice from './slices/appSlice'
import groupsSlice from './slices/groupsSlice'
import teacherSlice from './slices/teacherSlice'
import lessonsSlice from './slices/lessonsSlice'
import paymontsSlice from './slices/paymontsSlice'



const store = configureStore({
 reducer: {
  studentsSlice,
  appSlice,
  groupsSlice,
  teacherSlice,
  lessonsSlice,
  paymontsSlice,
 }
})



export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch