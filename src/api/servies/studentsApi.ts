import { $api } from "../$api";
import { IPaymont } from "../../types/paymontsType";
import { IResponseAddPaymontStudent, IResponseCreateStudents, IResponseGetStudent, IResponseGetStudents, IStudent } from "../../types/usersTypes";


export const studentsApi = {
 key: "/students",
 async createStudent(student: IStudent): Promise<IResponseCreateStudents>{
  const data = await $api.post(this.key, student)
  return data
 },
 async getStudents(): Promise<IResponseGetStudents>{
  const data = await $api.get(this.key)
  return data
 },
 async deleteStudent(id: string): Promise<IResponseCreateStudents>{
  const data = await $api.delete(`${this.key}/${id}`)
  return data
 },
 async getStudent(id: string): Promise<IResponseGetStudent>{
  const date = await $api.get(`${this.key}/${id}`)
  return date
 },
 async addPaymontStudent(id: string, paymonts: IPaymont[]): Promise<IResponseAddPaymontStudent>{
  const data = await $api.patch(`${this.key}/${id}`, {paymonts: paymonts})
  return data
 }
}