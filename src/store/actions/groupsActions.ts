import { Dispatch } from "react"
import { groupsApi } from "../../api/servies/groupsApi"
import { IGroup, IResponseAddGroups, IResponseAddStudentGroup, IResponseDeleteGroup, IResponseGetGroup, IResponseGetGroups } from "../../types/groupsType"
import { setGroups, setIsGroup } from "../slices/groupsSlice"
import { AxiosError } from "axios"
import { setError } from "../slices/studentsSlice"


export const getGroupsFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  groupsApi.getGroups().then((data: IResponseGetGroups) => {
   dispatch(setGroups(data.data))
  }).catch((err: Error | AxiosError) => { dispatch(setError(err.message)) })
 }
}

export const addGroupFetch = (Group: IGroup) => {
 return async (dispatch: Dispatch<any>) => {
  groupsApi.addGroup(Group).then((data: IResponseAddGroups) => {
   dispatch(getGroupsFetch())
  }).catch((err: Error | AxiosError) => { dispatch(setError(err.message)) })
 }
}

export const deleteGroupFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  groupsApi.deleteGroup(id).then((data: IResponseDeleteGroup) => {
   dispatch(getGroupsFetch())
  }).catch((err: Error | AxiosError) => { dispatch(setError(err.message)) })
 }
}


export const setStudentGroupFetch = (id: string, students: string[]) => {
 return async (dispatch: Dispatch<any>) => {
  groupsApi.addStudent(id, students).then((data: IResponseAddStudentGroup) => {
   dispatch(getGroupsFetch())
  }).catch((err: Error | AxiosError) => { dispatch(setError(err.message)) })
 }
}

export const deleteStudentGroupFetch = (idGroup: string, idStudent: string) => {
 return async (dispatch: Dispatch<any>) => {
  groupsApi.getGroup(idGroup).then((data: IResponseGetGroup) => {
   let arr: string[] = data.data.students
   arr.splice(arr.indexOf(idStudent), 1)
   groupsApi.addStudent(idGroup, arr).then((data: IResponseAddStudentGroup) => {
    dispatch(getGroupsFetch())
   }).catch((err: Error | AxiosError) => { dispatch(setError(err.message)) })
  })
 }
}

export const getGroupFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  groupsApi.getGroup(id).then((data: IResponseGetGroup) => {
   dispatch(setIsGroup(data.data))
  }).catch((err: Error | AxiosError) => { dispatch(setError(err.message)) })
 }
}