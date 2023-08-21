import { $api } from "../$api";
import { IPaymont, IResponseAddPaymont, IResponseGetPaymont } from "../../types/paymontsType";

export const paymontsApi = {
 key: "/paymonts",
 async getPaymonts(): Promise<IResponseGetPaymont>{
  const data = $api.get(this.key)
  return data
 },
 async addPaymont(paymont: IPaymont): Promise<IResponseAddPaymont>{
  const data = $api.post(this.key, paymont)
  return data
 }
}