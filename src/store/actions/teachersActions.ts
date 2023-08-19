import { Dispatch } from '@reduxjs/toolkit'
import { teacherApi } from '../../api/servies/teacherApi'
import { IResponseAddTeachers, IResponseDisableTeachers, IResponseGetTeachers, ITeacherGroup } from '../../types/teacherType'
import { setTeachers } from '../slices/teacherSlice'
import { AxiosError } from 'axios'
import { setError } from '../slices/studentsSlice'

export const getTeachersFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  teacherApi.getTeacher().then((data: IResponseGetTeachers) => {
   dispatch(setTeachers(data.data))
  }).catch((err: AxiosError | Error) => dispatch(setError(err.message)))
 }
}

export const addTeacherFetch = (Teacher: ITeacherGroup) => {
 return async (dispatch: Dispatch<any>) => {
  teacherApi.addTeacher(Teacher).then((data: IResponseAddTeachers) => {
   dispatch(getTeachersFetch())
  }).catch((err: AxiosError | Error) => dispatch(setError(err.message)))
 } 
}

export const disableTeacherFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  teacherApi.disableTeacher(id).then((data: IResponseDisableTeachers) => {
   dispatch(getTeachersFetch())
  }).catch((err: AxiosError | Error) => dispatch(setError(err.message)))
 }
}