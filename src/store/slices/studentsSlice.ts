import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStudent } from '../../types/usersTypes'

interface IinitialState {
 students: IStudent[] | null
 error: string | null,
 student: IStudent | null
}

const initialState: IinitialState = {
 students: null,
 error: null,
 student: null
}

const studentsSlice = createSlice({
 name: "studentsSlice",
 initialState,
 reducers: {
  setStudents(state, action:PayloadAction<IStudent[]>) {
   state.students = action.payload
  },
  setError(state, action:PayloadAction<string>){
   state.error = action.payload
  },
  setStudent(state, action: PayloadAction<IStudent>){
   state.student = action.payload
  }
 }
})

export default studentsSlice.reducer
export const {setError, setStudents, setStudent} = studentsSlice.actions