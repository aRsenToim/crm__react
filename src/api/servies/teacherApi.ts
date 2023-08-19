import { $api } from "../$api";
import { IResponseAddTeachers, IResponseDisableTeachers, IResponseGetTeachers, ITeacherGroup } from "../../types/teacherType";


export const teacherApi = {
 key: '/teachers',
 async getTeacher(): Promise<IResponseGetTeachers> {
  const data = await $api.get(this.key)
  return data
 },
 async addTeacher(Teacher: ITeacherGroup): Promise<IResponseAddTeachers> {
  const data = await $api.post(this.key, Teacher)
  return data
 },
 async disableTeacher(id: string): Promise<IResponseDisableTeachers> {
  const data = await $api.patch(`${this.key}/${id}`, { isDesible: true })
  return data
 }
}