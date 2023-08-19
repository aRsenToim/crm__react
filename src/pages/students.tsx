import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { deleteStudentFetch, getStudentsFetch } from '../store/actions/studentsActions';
import { IStudent } from '../types/usersTypes';
import { setDataPopup, setPopup } from '../store/slices/appSlice';
import { deleteStudentGroupFetch } from '../store/actions/groupsActions';

const Students: FC = () => {
 const dispatch = useAppDispatch()
 const students = useAppSelector(state => state.studentsSlice.students)
 const [isFetch, setIsFetch] = useState<boolean>(false)
 
 const deleteStudentHandle = (student: IStudent) => {
  dispatch(setPopup(true))
  dispatch(setDataPopup({
   title: "Are you sure you want to remove the student?",
   description: "If deleted, the student will not be reinstated",
   btn: "delete user",
   callback: () => {
    dispatch(deleteStudentFetch(student.id))
    dispatch(deleteStudentGroupFetch(student.idGroup, student.id))
   }
  }))
 }

 useEffect(() => {
  dispatch(getStudentsFetch())
  setIsFetch(true)
 }, [isFetch])

 return <div>
  <TableContainer>
   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
     <TableRow>
      <TableCell>ID students</TableCell>
      <TableCell align="right">Name</TableCell>
      <TableCell align="right">NameGroup</TableCell>
      <TableCell align="right">Phone</TableCell>
      <TableCell align="right">TelegramId</TableCell>
      <TableCell align="right">Delete</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {students?.map((student: IStudent) => <TableRow key={student.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
      <TableCell component="th" scope="row">
       {student.id}
      </TableCell>
      <TableCell align="right">{student.name} {student.lastname}</TableCell>
      <TableCell align="right">{student.nameGroup}</TableCell>
      <TableCell align="right">{student.phone}</TableCell>
      <TableCell align="right">{student.telegramId}</TableCell>
      <TableCell align="right">
       <IconButton onClick={() => {deleteStudentHandle(student)}}><DeleteIcon /></IconButton>
      </TableCell>
     </TableRow>)}
    </TableBody>
   </Table>
  </TableContainer>
 </div>
}

export default Students