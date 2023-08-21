import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPaymont } from "../../types/paymontsType";

interface IInitialState {
 paymonts: IPaymont[] | null,
 totalSum: number | null,
 error: string | null
}

const initialState: IInitialState = {
 paymonts: null,
 totalSum: 0,
 error: null,
}

const paymontsSlice = createSlice({
 name: "paymontsSlice",
 initialState,
 reducers: {
  setPaymonts(state, action: PayloadAction<IPaymont[]>){
   state.paymonts = action.payload
  },
  setTotalSum(state){
   let sum = 0 
   state.paymonts?.forEach((paymont: IPaymont) => {
    sum += paymont.sum
   })
   state.totalSum = sum
  },
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  }
 }
})

export default paymontsSlice.reducer
export const {setPaymonts, setError, setTotalSum} = paymontsSlice.actions