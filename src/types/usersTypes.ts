import { IPaymont } from "./paymontsType"


export interface IDataStudents {
 year: string
 month: string
 day: string
}

export interface IStudent {
 id: string
 idGroup: string
 name: string
 lastname: string
 email: string
 telegramId: string
 img: string
 phone: string
 paymonts: IPaymont[]
 gender: string
 nameGroup: string
 rank: string
}


//API
export interface IResponseCreateStudents {
 data: {}
}
export interface IResponseGetStudents {
 data: IStudent[]
}
export interface IResponseGetStudent {
 data: IStudent
}
export interface IResponseAddPaymontStudent {
 data: {}
}
//API
