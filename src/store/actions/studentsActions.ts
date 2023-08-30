import { Dispatch } from "redux"
import { studentsApi } from "../../api/servies/studentsApi"
import { IResponseAddPaymontStudent, IResponseGetStudent, IResponseGetStudents, IStudent } from "../../types/usersTypes"
import {AxiosError} from 'axios'
import { setError, setStudent, setStudents } from "../slices/studentsSlice"
import { IPaymont } from "../../types/paymontsType"


export const createStudentFetch = (student: IStudent) => {
 return async (dispatch: Dispatch<any>) => {
  studentsApi.createStudent(student).then(data => {

  }).catch((err: Error | AxiosError) => {
   dispatch(setError(err.message))
  })
 }
}

export const getStudentsFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  studentsApi.getStudents().then((data: IResponseGetStudents) => {
   dispatch(setStudents(data.data))
  }).catch((err: Error | AxiosError) => {
   dispatch(setError(err.message))
  })
 }
}

export const deleteStudentFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  studentsApi.deleteStudent(id).then(data => {
   dispatch(getStudentsFetch())
  }).catch((err: Error | AxiosError) => {
   dispatch(setError(err.message))
  })
 }
}

export const getStudentFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  studentsApi.getStudent(id).then((data: IResponseGetStudent) => {
   dispatch(setStudent(data.data))
  }).catch((err: Error | AxiosError) => {
   dispatch(setError(err.message))
  })
 }
}

export const addPaymontStudentFetch = (id: string, paymonts: IPaymont[]) => {
 return async (dispatch: Dispatch<any>) => {
  studentsApi.addPaymontStudent(id, paymonts).then((data: IResponseAddPaymontStudent) => {
   dispatch(getStudentFetch(id))
   dispatch(getStudentsFetch())
  }).catch((err: Error | AxiosError) => {
   dispatch(setError(err.message))
  })
 }
}