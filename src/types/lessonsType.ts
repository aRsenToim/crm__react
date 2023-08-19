import { IGroup } from "./groupsType"
import { ITeacherGroup } from "./teacherType"

export interface ILesson {
 id: string
 title: string
 description: string
 date: Date
 teacher: ITeacherGroup
 idGroup: string
 link: string
 numberLesson: number
 isStart: boolean
 rank: string 
}
 
export interface IResponseGetLessons {
 data: ILesson[]
}
export interface IResponseAddLessons {
 data: {}
}

export interface IResponseIsStartLessons {
 data: {}
}