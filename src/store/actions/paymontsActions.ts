import { Dispatch } from '@reduxjs/toolkit'
import { paymontsApi } from '../../api/servies/paymontsApi'
import { IPaymont, IResponseAddPaymont, IResponseGetPaymont } from '../../types/paymontsType'
import { setPaymonts, setTotalSum } from '../slices/paymontsSlice'
import { AxiosError } from 'axios'
import { setErorr } from '../slices/lessonsSlice'


export const setPaymontsFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  paymontsApi.getPaymonts().then((data: IResponseGetPaymont) => {
   dispatch(setPaymonts(data.data))
  }).catch((err: AxiosError | Error) => dispatch(setErorr(err.message)))
 }
}

export const addPaymontFetch = (paymont: IPaymont) => {
 return async (dispatch: Dispatch<any>) => {
  paymontsApi.addPaymont(paymont).then((data: IResponseAddPaymont) => {
   dispatch(setPaymontsFetch())
  }).catch((err: AxiosError | Error) => dispatch(setErorr(err.message)))
 }
}