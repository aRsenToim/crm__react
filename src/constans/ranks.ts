

export interface IRank {
 key: number
 title: string
}

export enum RanksTeacherEnum {
 middle = "Middle",
 senior = "Senior",
 teamlead = 'Teamlead',
 SoftwareEngineer = 'Software Engineer'
}

export enum RanksStudentsEnum {
 Newbie = "Newbie",
 Intern = "Intern",
 Junior = 'Junior',
 JuniorAdd = 'Junior+',
 Middle = "Middle"
}

export const RanksTeacher: IRank[] = [
 {
  key: 1,
  title: RanksTeacherEnum.middle
 },
 {
  key: 2,
  title: RanksTeacherEnum.senior
 },
 {
  key: 3,
  title: RanksTeacherEnum.teamlead
 },
 {
  key: 4,
  title: RanksTeacherEnum.SoftwareEngineer
 },
]

export const RanksStudents: IRank[] = [
 {
  key: 1,
  title: RanksStudentsEnum.Newbie
 },
 {
  key: 2,
  title: RanksStudentsEnum.Intern
 },
 {
  key: 3,
  title: RanksStudentsEnum.Junior
 },
 {
  key: 4,
  title: RanksStudentsEnum.JuniorAdd
 },
 {
  key: 5,
  title: RanksStudentsEnum.Middle
 }
]