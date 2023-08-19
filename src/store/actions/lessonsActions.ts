import { Dispatch } from '@reduxjs/toolkit'
import { lessonsApi } from '../../api/servies/lessonsApi'
import { ILesson, IResponseAddLessons, IResponseGetLessons, IResponseIsStartLessons } from '../../types/lessonsType'
import { setLessons } from '../slices/lessonsSlice'
import { AxiosError } from 'axios'
import { setError } from '../slices/studentsSlice'



export const getLessonsFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  lessonsApi.getLesson().then((data: IResponseGetLessons) => {
   dispatch(setLessons(data.data))
  }).catch((err: Error | AxiosError) => {setError(err.message)})
 }
}

export const addLessonFetch = (lesson: ILesson) => {
 return async (dispatch: Dispatch<any>) => {
  lessonsApi.addLesson(lesson).then((data: IResponseAddLessons) => {
   dispatch(getLessonsFetch())
  }).catch((err: Error | AxiosError) => {setError(err.message)})
 }
}


export const isStartLessonFetch = (id: string, isStart: boolean) => {
 return async (dispatch: Dispatch<any>) => {
  lessonsApi.isStartLesson(id, isStart).then((data: IResponseIsStartLessons) => {
   dispatch(getLessonsFetch())
  }).catch((err: Error | AxiosError) => {setError(err.message)})
 }
}