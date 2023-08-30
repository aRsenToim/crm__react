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
import Landing from "../components/landing/landing"
import StudentPage from "../pages/student"

export interface IRoute {
 path: string
 component: React.ComponentType
 name: string
 isVisible: boolean
}

enum RouteNames{
 LANDING = 'landing',
 HOME =  '/',
 STUDENTS = 'students',
 GROUPS  = 'groups',
 LESSONS = 'lessons',
 CREATESTUDENT = 'createstudent',
 CREATEGROUP = 'creategroup',
 CREATETEACHER =  'createTeacher',
 CREATELESSONS = 'createLessons',
 TEACHER = 'teacher',
 PAYMONTS = 'paymonts',
 STUDENT = 'student/:id'
}

export const UnivalnyeRoute: IRoute[] = [
 {
  path: RouteNames.LANDING,
  component: Landing,
  name: 'landing',
  isVisible: false
 },
]
export const routes: IRoute[] = [
 {
  path: RouteNames.HOME,
  component: HomePage,
  name: 'Home',
  isVisible: true
 },
 {
  path: RouteNames.STUDENT,
  component: StudentPage,
  name: 'Student',
  isVisible: false
 },
 {
  path: RouteNames.GROUPS,
  component: Groups,
  name: 'Groups',
  isVisible: true
 },
 {
  path: RouteNames.STUDENTS,
  component: Students,
  name: 'Studnets',
  isVisible: true
 },
 {
  path: RouteNames.TEACHER,
  component: Teachers,
  name: "Teachers",
  isVisible: true
 },
 {
  path: RouteNames.LESSONS,
  component: Lessons,
  name: "Lessons",
  isVisible: true
 },
 {
  path: RouteNames.PAYMONTS,
  component: Paymonts,
  name: "Paymonts",
  isVisible: true
 },
]


export const otherRoutes: IRoute[] = [
 {
  path: RouteNames.CREATEGROUP,
  component: CreateGroup,
  name: "Create Group",
  isVisible: true
 },
 {
  path: RouteNames.CREATESTUDENT,
  component: CreateStudent,
  name: "Create Student",
  isVisible: true
 },
 {
  path: RouteNames.CREATETEACHER,
  component: CreateTeacher,
  name: "Create teacher",
  isVisible: true
 },
 {
  path: RouteNames.CREATELESSONS,
  component: CreateLessons,
  name: "Create Lesson",
  isVisible: true
 }
]