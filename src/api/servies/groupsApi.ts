import { $api } from "../$api";
import { IGroup, IResponseAddGroups, IResponseAddStudentGroup, IResponseDeleteGroup, IResponseGetGroup, IResponseGetGroups } from "../../types/groupsType";


export const groupsApi = {
 async getGroups(): Promise<IResponseGetGroups>{
  const data = await $api.get('/groups')
  return data
 },
 async addGroup(Group: IGroup): Promise<IResponseAddGroups>{
  const data = await $api.post('/groups', Group)
  return data
 },
 async deleteGroup(id: string): Promise<IResponseDeleteGroup>{
  const data = await $api.delete(`/groups/${id}`)
  return data
 },
 async addStudent(id: string, students: string[], ): Promise<IResponseAddStudentGroup>{
  const data = await $api.patch(`/groups/${id}/`, {students: students})
  return data
 },
 async getGroup(idGroup: string): Promise<IResponseGetGroup>{
  const data = await $api.get(`/groups/${idGroup}/`)
  return data
 }
}