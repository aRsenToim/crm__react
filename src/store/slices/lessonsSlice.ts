import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ILesson } from "../../types/lessonsType"


interface IInitialState {
 error: string | null
 lessons: ILesson[] | null
}

const initialState: IInitialState = {
 error: null,
 lessons: null
}

const lessonsSlice = createSlice({
 name: "lessonsSlice",
 initialState,
 reducers: {
  setErorr(state, action: PayloadAction<string>){
   state.error = action.payload
  },
  setLessons(state, action: PayloadAction<ILesson[]>){
   state.lessons = action.payload
  }
 }
})

export default lessonsSlice.reducer
export const {setErorr, setLessons} = lessonsSlice.actions