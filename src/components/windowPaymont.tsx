import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setAlert, setAlertIsOpen, setPopup, setWindow } from "../store/slices/appSlice";
import { Box, Button, Modal, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { IStudent } from "../types/usersTypes";
import { addPaymontFetch } from "../store/actions/paymontsActions";
import { generatorId } from "../helpers/generatorID";
import { setTotalSum } from "../store/slices/paymontsSlice";
import { addPaymontStudentFetch } from "../store/actions/studentsActions";

const style = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: 400,
 bgcolor: 'background.paper',
 border: '2px solid #000',
 boxShadow: 24,
 p: 4,
};

const WindowPaymont: FC = () => {
 const window = useAppSelector(state => state.appSlice.window)
 const dispatch = useAppDispatch()
 const students = useAppSelector(state => state.studentsSlice.students)
 const [sum, setSum] = useState<number>(0)
 const [isStudent, setIsStudent] = useState<string>("")

 const handleAddPaymont = () => {
  //Error
  if (!sum || !isStudent) {
   dispatch(setAlertIsOpen(true))
   dispatch(setAlert({
    title: "You missed one of the properties",
    description: "Enter all teacher properties correctly"
   }))
   return;
  }
  //success
  const student: IStudent = JSON.parse(isStudent)
  dispatch(addPaymontFetch({
   idPaymont: generatorId(),
   sum,
   account: student
  }))
  dispatch(addPaymontStudentFetch(student.id, [...student.paymonts, {
   idPaymont: generatorId(),
   sum,
   account: student
  }]))
  dispatch(setTotalSum())
 }

 return <Modal
  open={window}
  onClose={() => { dispatch(setWindow(false)) }}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
 >
  <Box sx={style}>
   <Typography id="modal-modal-title" variant="h6" component="h2">
    Add Paymont
   </Typography>
   <TextField style={{
    marginTop: "20px"
   }} id="outlined-basic" value={sum} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(+e.currentTarget.value)
   }} label="Sum paymont" variant="outlined" />
   <FormControl style={{
    display: "grid",
    marginTop: "20px",
   }}>
    <InputLabel id="demo-simple-select-label">Students</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={isStudent}
     label="Students"
     onChange={(event: SelectChangeEvent) => { setIsStudent(event.target.value) }}
    >
     {students?.map((teacher: IStudent) => { return <MenuItem value={JSON.stringify(teacher)} key={teacher.id}>{teacher.name} {teacher.lastname}</MenuItem> })}
    </Select>
   </FormControl>
   <Button style={{
    marginTop: "20px"
   }} onClick={handleAddPaymont} variant="contained">Add paymont</Button>
  </Box>
 </Modal>
}

export default WindowPaymont