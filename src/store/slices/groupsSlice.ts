import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGroup, IResponseGetGroups } from "../../types/groupsType";
import { groupsApi } from "../../api/servies/groupsApi";

interface IinitialState {
 erorr: string | null
 groups: IGroup[] | null
 isGroup: IGroup | null
}

const initialState: IinitialState = {
 erorr: null,
 groups: null,
 isGroup: null
}


const groupsSlice = createSlice({
 name: "groupsSlice",
 initialState,
 reducers: {
  setError(state, action: PayloadAction<string>) {
   state.erorr = action.payload
  },
  setGroups(state, action: PayloadAction<IGroup[]>) {
   state.groups = action.payload
  },
  setIsGroup(state, action: PayloadAction<IGroup>){
   state.isGroup = action.payload
  }
 }
})

export default groupsSlice.reducer
export const { setError, setGroups, setIsGroup } = groupsSlice.actions