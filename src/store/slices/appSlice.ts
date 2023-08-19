import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IDataPopup {
 title: string
 description: string
 btn: string
 callback: () => void
}
interface IAlert {
 title: string
 description: string
}

interface IinitialState {
 popup: boolean
 dataPopup: IDataPopup | null
 alert: IAlert | null
 alertIsOpen: boolean
}

const initialState: IinitialState = {
 popup: false,
 dataPopup: null,
 alert: null,
 alertIsOpen: false
}

const appSlice = createSlice({
 name: "appSlice",
 initialState,
 reducers: {
  setPopup(state, action: PayloadAction<boolean>){
   state.popup = action.payload
  },
  setDataPopup(state, action: PayloadAction<IDataPopup>){
   state.dataPopup = action.payload
  },
  setAlert(state, action: PayloadAction<IAlert>){
   state.alert = action.payload
  },
  setAlertIsOpen(state, action: PayloadAction<boolean>){
   state.alertIsOpen = action.payload
  }
 }
})

export default appSlice.reducer
export const {setPopup, setDataPopup, setAlert, setAlertIsOpen} = appSlice.actions