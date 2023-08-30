import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { createStudentFetch } from "../store/actions/studentsActions"
import { generatorId } from "../helpers/generatorID"
import { setAlert, setAlertIsOpen } from "../store/slices/appSlice"
import { Navigate, redirect } from "react-router-dom"
import { IGroup } from "../types/groupsType"
import { setStudentGroupFetch } from "../store/actions/groupsActions"
import { IRank, RanksStudents } from "../constans/ranks"
const CreateStudent = () => {
 const dispatch = useAppDispatch()
 const groups = useAppSelector(state => state.groupsSlice.groups)

 const [gender, setGender] = useState<string>('')
 const [name, setName] = useState<string>('')
 const [lastname, setLastName] = useState<string>('')
 const [email, setEmail] = useState<string>('')
 const [telegramId, setTelegramId] = useState<string>('')
 const [phone, setPhone] = useState<string>('')
 const [image, setImage] = useState<string>('')
 const [nameGroup, setNameGroup] = useState<string>('')
 const [isGroup, setIsGroup] = useState<IGroup | null>(null)
 const [isRedirect, setIsRedirect] = useState<boolean>(false)
 const [rank, setRank] = useState<string>('')

 const createStudentHandle = () => {
  if (!name || !gender || !lastname || !email || !telegramId || !phone || !nameGroup) {
   dispatch(setAlertIsOpen(true))
   dispatch(setAlert({
    title: "You missed one of the properties",
    description: "Enter all student properties correctly"
   }))
   return;
  }
  const idStudent = generatorId()
  dispatch(createStudentFetch({
   id: idStudent,
   name,
   lastname,
   img: image,
   email,
   telegramId,
   phone,
   gender,
   paymonts: [],
   nameGroup,
   idGroup: isGroup?.id ?? '',
   rank,
  }))
  dispatch(setStudentGroupFetch(isGroup?.id ?? '', [...isGroup?.students ?? [], idStudent]))
  setIsRedirect(true)
 }

 if (isRedirect) {
  return <Navigate to='/students' />
 }

 return <>
  <Box
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Typography variant="h6" component="h2">
    Create Student
   </Typography>
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <TextField id="outlined-basic" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
   }} label="name" variant="outlined" />
   <TextField value={lastname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value)
   }} id="outlined-basic" label="lastname" variant="outlined" />
   <TextField value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
   }} id="outlined-basic" label="email" type="outlined" variant="outlined" />
  </Box>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}
  >
   <TextField value={telegramId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegramId(e.currentTarget.value)
   }} id="outlined-basic" label="telegramId" variant="outlined" />
   <TextField value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
   }} id="outlined-basic" label="phone" variant="outlined" />
   <FormControl>
    <InputLabel id="demo-simple-select-label">Name group</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={nameGroup}
     label="Name group"
     onChange={(event: SelectChangeEvent) => {
      setNameGroup(event.target.value)
     }}
    >
     {groups?.map((group: IGroup) => <MenuItem key={group.id} onClick={() => {
      setIsGroup(group)
     }} value={group.title}>{group.title}</MenuItem>)}
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
    <InputLabel id="demo-simple-select-label">gender</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={gender}
     label="gender"
     onChange={(event: SelectChangeEvent) => { setGender(event.target.value) }}
    >
     <MenuItem value={'Men'}>Men</MenuItem>
     <MenuItem value={'Woman'}>Woman</MenuItem>
    </Select>
   </FormControl>
   <FormControl>
    <InputLabel id="demo-simple-select-label">Rank</InputLabel>
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
   <TextField value={image} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.currentTarget.value)
   }} id="outlined-basic" label="URL Image" variant="outlined" />
  </Box>
  <Box component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Button onClick={createStudentHandle} variant="contained">Add Student</Button>
  </Box>
 </>
}

export default CreateStudent