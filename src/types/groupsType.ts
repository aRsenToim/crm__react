import { ITeacherGroup } from "./teacherType"


export interface ICardGroup {
 
}


export interface IGroup {
 id: string
 title: string
 description: string
 teacher: ITeacherGroup | null
 time: number
 price: number
 students: string[]
}

//API
export interface IResponseGetGroups{
 data: IGroup[]
}

export interface IResponseAddGroups{
 data: {}
}

export interface IResponseDeleteGroup{
 data: {}
}
export interface IResponseAddStudentGroup{
 data: {}
}
export interface IResponseGetGroup{
 data: IGroup
}