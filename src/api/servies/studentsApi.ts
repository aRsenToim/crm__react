import { $api } from "../$api";
import { IResponseCreateStudents, IResponseGetStudents, IStudent } from "../../types/usersTypes";


export const studentsApi = {
 async createStudent(student: IStudent): Promise<IResponseCreateStudents>{
  const data = await $api.post('/students', student)
  return data
 },
 async getStudents(): Promise<IResponseGetStudents>{
  const data = await $api.get('/students')
  return data
 },
 async deleteStudent(id: string): Promise<IResponseCreateStudents>{
  const data = await $api.delete(`/students/${id}`)
  return data
 }
}