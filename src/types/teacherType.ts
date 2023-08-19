
export interface ITeacherGroup {
 id: string
 name: string
 lastname: string
 email: string
 telegramId: string
 phone: number
 gender: string
 rank: string
 isDesible: boolean
}


export interface IResponseGetTeachers {
 data: ITeacherGroup[]
}
export interface IResponseAddTeachers{
 data: {}
}
export interface IResponseDisableTeachers{
 data: {}
}