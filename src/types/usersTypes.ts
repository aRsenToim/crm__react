

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
 phone: string
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
//API