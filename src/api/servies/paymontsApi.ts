import { $api } from "../$api";
import { IPaymont, IResponseGetPaymont } from "../../types/paymontsType";

export const paymontsApi = {
 key: "/paymonts",
 async getPaymonts(): Promise<IResponseGetPaymont>{
  const data = $api.get(this.key)
  return data
 },
 async addPaymont(paymont: IPaymont): Promise<{data: {}}>{
  const data = $api.post(this.key, paymont)
  return data
 },
 async deletePaymont(idPaymont: string): Promise<{data: {}}>{
  const data = $api.delete(`${this.key}/${idPaymont}`)
  return data
 }
}