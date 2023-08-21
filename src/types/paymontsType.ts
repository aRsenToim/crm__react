import { IStudent } from "./usersTypes"


export interface IPaymont {
 idPaymont: string
 sum: number
 account: IStudent
}

export interface IResponseGetPaymont{
 data: IPaymont[]
}

export interface IResponseAddPaymont{
 data: {}
}