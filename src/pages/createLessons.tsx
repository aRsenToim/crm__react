import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ITeacherGroup } from "../types/teacherType";
import { useState } from "react";
import { IRank, RanksStudents } from "../constans/ranks";
import { IGroup } from "../types/groupsType";
import { setGroups } from "../store/slices/groupsSlice";
import { Moment } from 'moment'
import { addLessonFetch } from "../store/actions/lessonsActions";
import { generatorId } from "../helpers/generatorID";
import { Navigate } from "react-router-dom";
import { setAlert, setAlertIsOpen } from "../store/slices/appSlice";


const CreateLessons = () => {
 const teachers = useAppSelector(state => state.teacherSlice.teachers)
 const dispatch = useAppDispatch()
 const [isRedirect, setIsRedirect] = useState<boolean>(false)

 const [title, setTitle] = useState<string>('')
 const [description, setDescription] = useState<string>("")
 const [date, setDate] = useState<Date | null>(null)
 const [teacher, setTeacher] = useState<string>("")
 const [idGroup, setIdGroup] = useState<string>("")
 const [link, setLink] = useState<string>("")
 const [numberLesson, setNumberLesson] = useState<number>(0)
 const [rank, setRank] = useState<string>("")



 const groups = useAppSelector(state => state.groupsSlice.groups)

 const HandleAddLesson = () => {  
  if (!title || !description || !date || !teacher || !idGroup || !link || !numberLesson || !rank) {   
   dispatch(setAlertIsOpen(true))
   dispatch(setAlert({
    title: "You missed one of the properties",
    description: "Enter all teacher properties correctly"
   }))
   return;
  }
  dispatch(addLessonFetch({
   id: generatorId(),
   title,
   description,
   date: date ?? new Date(),
   teacher: JSON.parse(teacher),
   idGroup,
   link,
   numberLesson,
   isStart: false,
   rank,
  }))
  setIsRedirect(true)
 }

 if (isRedirect) {
  return <Navigate to='/lessons' />
 }

 return <div>
  <Box
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Typography variant="h6" component="h2">
    Create lesson
   </Typography>
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <TextField id="outlined-basic" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
   }} label="Title lesson" variant="outlined" />
   <TextField id="outlined-basic" value={link} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value)
   }} label="Link lesson" variant="outlined" />
   <TextField id="outlined-basic" value={numberLesson} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberLesson(+e.currentTarget.value)
   }} label="Number Lesson" variant="outlined" />
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <FormControl>
    <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={teacher}
     label="gender"
     onChange={(event: SelectChangeEvent) => { setTeacher(event.target.value) }}
    >
     {teachers?.map((teacher: ITeacherGroup) => teacher.isDesible ? undefined : <MenuItem value={JSON.stringify(teacher)} key={teacher.id}>{teacher.name} {teacher.lastname}</MenuItem>)}
    </Select>
   </FormControl>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker value={date} onChange={(e: Date | null) => { setDate(e) }} />
   </LocalizationProvider>
   <FormControl>
    <InputLabel id="demo-simple-select-label">Type rank</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={rank}
     label="gender"
     onChange={(event: SelectChangeEvent) => { setRank(event.target.value) }}
    >
     {
      RanksStudents.map((rank: IRank) => <MenuItem value={rank.title} key={rank.key}>{rank.title}</MenuItem>)
     }
    </Select>
   </FormControl>
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <FormControl>
    <InputLabel id="demo-simple-select-label">Name group</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={idGroup}
     label="Name group"
     onChange={(event: SelectChangeEvent) => {
      setIdGroup(event.target.value)
     }}
    >
     {groups?.map((group: IGroup) => <MenuItem key={group.id} onClick={() => {
      setIdGroup(group.id)
     }} value={group.id}>{group.title}</MenuItem>)}
    </Select>
   </FormControl>
   <TextField
    id="outlined-multiline-static"
    label="Description"
    value={description}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setDescription(e.currentTarget.value) }}
    multiline
    rows={4}
   />
  </Box>
  <Button variant="contained" onClick={HandleAddLesson}>Create lesson</Button>
 </div>
}

export default CreateLessons