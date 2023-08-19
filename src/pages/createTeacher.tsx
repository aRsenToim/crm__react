import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useAppDispatch } from "../store/hooks"
import { addTeacherFetch } from "../store/actions/teachersActions"
import { generatorId } from "../helpers/generatorID"
import { setAlert, setAlertIsOpen } from "../store/slices/appSlice"
import { Navigate } from "react-router-dom"
import { IRank, RanksTeacher } from "../constans/ranks"



const CreateTeacher = () => {
 const dispatch = useAppDispatch()
 const [nameTeacher, setNameTeacher] = useState<string>('')
 const [lastname, setLastname] = useState<string>('')
 const [emailTeacher, setEmailTeacher] = useState<string>('')
 const [telegramIDTeacher, setTelegramIDteacher] = useState<string>('')
 const [phoneTeacher, setPhoneTeacher] = useState<string>('')
 const [gender, setGender] = useState<string>('')
 const [isRedirect, setIsRedirect] = useState<boolean>(false)
 const [rank, setRank] = useState<string>('')

 const AddTeacherHandle = () => {
  if (!nameTeacher && !lastname && !emailTeacher && !telegramIDTeacher && !phoneTeacher && !gender) {
   dispatch(setAlertIsOpen(true))
   dispatch(setAlert({
    title: "You missed one of the properties",
    description: "Enter all teacher properties correctly"
   }))
   return;
  }
  dispatch(addTeacherFetch({
   id: generatorId(),
   name: nameTeacher,
   lastname,
   email: emailTeacher,
   telegramId: telegramIDTeacher,
   phone: +phoneTeacher,
   gender,
   rank,
   isDesible: false
  }))
  setIsRedirect(true)
 }

 if (isRedirect) {
  return <Navigate to='/teacher' />
 }

 return <div>
  <>
   <Box
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <Typography variant="h6" component="h2">
     Create teacher
    </Typography>
   </Box>
   <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}
   >
    <TextField id="outlined-basic" value={nameTeacher} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     setNameTeacher(e.currentTarget.value)
    }} label="Name teacher" variant="outlined" />
    <TextField id="outlined-basic" value={lastname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     setLastname(e.currentTarget.value)
    }} label="Lastname" variant="outlined" />
    <TextField id="outlined-basic" value={emailTeacher} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     setEmailTeacher(e.currentTarget.value)
    }} label="email" variant="outlined" />
   </Box>
   <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}
   >
    <TextField id="outlined-basic" value={telegramIDTeacher} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     setTelegramIDteacher(e.currentTarget.value)
    }} label="Telegram ID" variant="outlined" />
    <TextField id="outlined-basic" value={phoneTeacher} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     setPhoneTeacher(e.currentTarget.value)
    }} label="phone" variant="outlined" />
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
   </Box>
   <Box component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <FormControl>
     <InputLabel id="demo-simple-select-label">Rank</InputLabel>
     <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={rank}
      label="gender"
      onChange={(event: SelectChangeEvent) => { setRank(event.target.value) }}
     >
      {RanksTeacher.map((el: IRank) => <MenuItem key={el.key} value={el.title}>{el.title}</MenuItem>)}
     </Select>
    </FormControl>
   </Box>
   <Box component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <Button variant="contained" onClick={AddTeacherHandle}>Create teacher</Button>
   </Box>
  </>
 </div>
}

export default CreateTeacher