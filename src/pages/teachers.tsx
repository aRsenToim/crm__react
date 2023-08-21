import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { ITeacherGroup } from "../types/teacherType";
import { setDataPopup, setPopup } from "../store/slices/appSlice";
import { disableTeacherFetch } from "../store/actions/teachersActions";


const Teachers = () => {
 const teachers = useAppSelector(state => state.teacherSlice.teachers)
 const dispatch = useAppDispatch()

 const handleTeacher = (id: string) => {
  dispatch(setPopup(true))
  dispatch(setDataPopup({
   title: "Are you sure you want to remove the group?",
   description: "If deleted, the group will not be reinstated",
   btn: "delete user",
   callback: () => {
    dispatch(disableTeacherFetch(id))
   }
  }))
 }

 return <div>
  <TableContainer>
   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
     <TableRow>
      <TableCell>ID teacher</TableCell>
      <TableCell align="right">Name</TableCell>
      <TableCell align="right">Email</TableCell>
      <TableCell align="right">Phone</TableCell>
      <TableCell align="right">TelegramId</TableCell>
      <TableCell align="right">Rank</TableCell>
      <TableCell align="right">Delete</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {teachers?.map((teacher: ITeacherGroup) => <>
      {teacher.isDesible ? undefined : <TableRow
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       key={teacher.id}
      >
       <TableCell key={teacher.id} component="th" scope="row">
        {teacher.id}
       </TableCell>
       <TableCell align="right">{teacher.name} {teacher.lastname}</TableCell>
       <TableCell align="right">{teacher.email}</TableCell>
       <TableCell align="right">{teacher.phone}</TableCell>
       <TableCell align="right">{teacher.telegramId}</TableCell>
       <TableCell align="right">{teacher.rank}</TableCell>
       <TableCell align="right">
        <IconButton onClick={() => { handleTeacher(teacher.id) }}><DisabledByDefaultIcon /></IconButton>
       </TableCell>
      </TableRow>}
     </>
     )}
    </TableBody>
   </Table>
  </TableContainer>
 </div >
}

export default Teachers