import { IconButton, Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect } from 'react'
import { getLessonsFetch, isStartLessonFetch } from "../store/actions/lessonsActions"
import { ILesson } from "../types/lessonsType"


const Lessons = () => {
 const lessons = useAppSelector(state => state.lessonsSlice.lessons)
 const dispatch = useAppDispatch()
 useEffect(() => {
  if (!lessons) {
   dispatch(getLessonsFetch())
  }
 },)
 return <div>
  {lessons ? <>
   <TableContainer>
    <Table sx={{ width: '100%' }} aria-label="simple table">
     <TableHead>
      <TableRow>
       <TableCell>ID lesson</TableCell>
       <TableCell align="right">Title lesson</TableCell>
       <TableCell align="right">Date</TableCell>
       <TableCell align="right">Teacher</TableCell>
       <TableCell align="right">ID Group</TableCell>
       <TableCell align="right">link</TableCell>
       <TableCell align="right">numberLesson</TableCell>
       <TableCell align="right">Rank</TableCell>
       <TableCell align="right">Is start</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {lessons.map((lesson: ILesson) => <TableRow
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       key={lesson.id}
      >
       <TableCell align="right">{lesson.id}</TableCell>
       <TableCell align="right">{lesson.title}</TableCell>
       <TableCell align="right">{JSON.stringify(lesson.date)}</TableCell>
       <TableCell align="right">{lesson.teacher.name} {lesson.teacher.lastname}</TableCell>
       <TableCell align="right">{lesson.idGroup}</TableCell>
       <TableCell align="right">{lesson.link}</TableCell>
       <TableCell align="right">{lesson.numberLesson}</TableCell>
       <TableCell align="right">{lesson.rank}</TableCell>
       <TableCell align="right">{lesson.isStart ? <button onClick={() => { dispatch(isStartLessonFetch(lesson.id, false)) }}>end</button> : <button onClick={() => { dispatch(isStartLessonFetch(lesson.id, true)) }}>start</button>}</TableCell>
      </TableRow>)}
     </TableBody>
    </Table>
   </TableContainer>
  </> : undefined}
 </div>
}

export default Lessons