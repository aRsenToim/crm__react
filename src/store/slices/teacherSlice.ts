import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITeacherGroup } from "../../types/teacherType";



interface IinitialState {
 error: string | null
 teachers: ITeacherGroup[] | null
}

const initialState: IinitialState = {
 error: null,
 teachers: null
}


const teacherSlice = createSlice({
 name: "teacherSlice",
 initialState: initialState,
 reducers: {
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  },
  setTeachers(state, action: PayloadAction<ITeacherGroup[]>){
   state.teachers = action.payload
  }
 }
})

export default teacherSlice.reducer
export const {setError, setTeachers} = teacherSlice.actions