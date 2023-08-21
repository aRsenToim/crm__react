import React from "react"
import HomePage from "../pages/home"
import Groups from "../pages/groups"
import Students from "../pages/students"
import CreateStudent from "../pages/createStudents"
import CreateGroup from "../pages/createGroup"
import CreateTeacher from "../pages/createTeacher"
import Teachers from "../pages/teachers"
import Lessons from "../pages/lessons"
import CreateLessons from "../pages/createLessons"
import Paymonts from "../pages/paymonts"

export interface IRoute {
 path: string
 component: React.ComponentType
 name: string
}

enum RouteNames{
 HOME =  '/',
 STUDENTS = '/students',
 GROUPS  = '/groups',
 LESSONS = '/lessons',
 CREATESTUDENT = '/createstudent',
 CREATEGROUP = '/creategroup',
 CREATETEACHER =  '/createTeacher',
 CREATELESSONS = '/createLessons',
 TEACHER = '/teacher',
 PAYMONTS = '/paymonts'
}


export const routes: IRoute[] = [
 {
  path: RouteNames.HOME,
  component: HomePage,
  name: 'Home'
 },
 {
  path: RouteNames.GROUPS,
  component: Groups,
  name: 'Groups'
 },
 {
  path: RouteNames.STUDENTS,
  component: Students,
  name: 'Studnets'
 },
 {
  path: RouteNames.TEACHER,
  component: Teachers,
  name: "Teachers"
 },
 {
  path: RouteNames.LESSONS,
  component: Lessons,
  name: "Lessons"
 },
 {
  path: RouteNames.PAYMONTS,
  component: Paymonts,
  name: "Paymonts"
 },
]


export const otherRoutes: IRoute[] = [
 {
  path: RouteNames.CREATEGROUP,
  component: CreateGroup,
  name: "Create Group"
 },
 {
  path: RouteNames.CREATESTUDENT,
  component: CreateStudent,
  name: "Create Student"
 },
 {
  path: RouteNames.CREATETEACHER,
  component: CreateTeacher,
  name: "Create teacher"
 },
 {
  path: RouteNames.CREATELESSONS,
  component: CreateLessons,
  name: "Create Lesson"
 }
]