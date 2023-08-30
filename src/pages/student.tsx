import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { FC, useEffect } from 'react'
import { getStudentFetch } from "../store/actions/studentsActions"
import User from "../components/user/user"
import { error } from "console"


const StudentPage: FC = () => {
 const dispatch = useAppDispatch()
 const student = useAppSelector(state => state.studentsSlice.student)
 const erorrStudent = useAppSelector(state => state.studentsSlice.error)
 const {id} = useParams()

 useEffect(() => {
  if (id && !erorrStudent) {
   dispatch(getStudentFetch(id))
  }
 }, [id])
 

 return <div>
  {erorrStudent || !id ? <span>Erorr</span> : <>{student && <User student={student}/>}</>}
 </div>
}

export default StudentPage