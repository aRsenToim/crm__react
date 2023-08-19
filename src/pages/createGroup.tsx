import { FC, useState, useEffect } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { setAlert, setAlertIsOpen } from '../store/slices/appSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addGroupFetch } from '../store/actions/groupsActions'
import { generatorId } from '../helpers/generatorID'
import { Navigate } from 'react-router-dom'
import { ITeacherGroup } from '../types/teacherType'



const CreateGroup: FC = () => {
 const dispatch = useAppDispatch()
 const teachers = useAppSelector(state => state.teacherSlice.teachers)

 const [isRedirect, setIsRedirect] = useState<boolean>(false)
 const [isTeacher, setIsTeacher] = useState<string>("")
 const [nameGroup, setNameGroup] = useState<string>('')
 const [time, setTime] = useState<number>(0)
 const [price, setPrice] = useState<number>(0)
 const [description, setDescription] = useState<string>('')
  
 const addGroupHandle = () => {
  if (!nameGroup || !time || !price || !description || !isTeacher) {
   dispatch(setAlertIsOpen(true))
   dispatch(setAlert({
    title: "You missed one of the properties",
    description: "Enter all group properties correctly"
   }))
   return;
  } 
  dispatch(addGroupFetch({
   id: generatorId(),
   title: nameGroup,
   description,
   time: time,
   students: [],
   price: price,
   teacher: JSON.parse(isTeacher)
  }))
  setIsRedirect(true)
 }

  if (isRedirect) {
   return <Navigate to='/groups'/>
  }

 return <div>
  <Box
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Typography variant="h6" component="h2">
    Create Group
   </Typography>
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <TextField id="outlined-basic" value={nameGroup} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setNameGroup(e.currentTarget.value)
   }} label="Title group" variant="outlined" />
   <TextField id="outlined-basic" value={time} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(+e.currentTarget.value)
   }} label="Time in months" variant="outlined" />
   <TextField id="outlined-basic" value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.currentTarget.value)
   }} label="price" variant="outlined" />
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <TextField
    id="outlined-multiline-static"
    label="Description"
    value={description}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setDescription(e.currentTarget.value) }}
    multiline
    rows={4}
   />
   <FormControl>
    <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={isTeacher}
     label="gender"
     onChange={(event: SelectChangeEvent) => { setIsTeacher(event.target.value) }}
    >
     {teachers?.map((teacher: ITeacherGroup) => {return teacher.isDesible ? <div></div> : <MenuItem value={JSON.stringify(teacher)} key={teacher.id}>{teacher.name} {teacher.lastname}</MenuItem>})}
    </Select>
   </FormControl>
  </Box>
  
  <Button variant="contained" onClick={addGroupHandle}>Create group</Button>
 </div>
}


export default CreateGroup