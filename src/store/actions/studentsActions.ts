import { Dispatch } from "redux"
import { studentsApi } from "../../api/servies/studentsApi"
import { IResponseGetStudents, IStudent } from "../../types/usersTypes"
import {AxiosError} from 'axios'
import { setError, setStudents } from "../slices/studentsSlice"

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