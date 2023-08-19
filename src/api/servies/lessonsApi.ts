import { $api } from "../$api";
import { ILesson, IResponseAddLessons, IResponseGetLessons, IResponseIsStartLessons } from "../../types/lessonsType";


export const lessonsApi = {
 key: '/lessons',
 async getLesson(): Promise<IResponseGetLessons>{
  const data = await $api.get(this.key)
  return data
 },
 async addLesson(lesson: ILesson): Promise<IResponseAddLessons>{
  const data = await $api.post(this.key, lesson)
  return data
 },
 async isStartLesson(id: string, isStart: boolean): Promise<IResponseIsStartLessons>{
  const data = await $api.patch(`${this.key}/${id}`, {isStart: isStart})
  return data
 }
}