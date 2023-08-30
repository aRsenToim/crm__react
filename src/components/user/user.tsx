import { IStudent } from '../../types/usersTypes'
import './user.scss'
import { FC } from 'react'

interface IUserProps {
 student: IStudent
}

const User: FC<IUserProps> = ({student}) => {
 return <div className='User'>
  <h2 className='User__id'>{student.id}</h2>
  <div className='User__header'>
   <img src={student.img} className='User__image' alt="" />
   <div className='User__info'>
    <h2 className='User__title'>{student.name} {student.lastname} <span>({student.gender})</span></h2>
    <ul className='User__nav'>
     <li className='User__block'>
      <span>Email</span>
      <h3>{student.email}</h3>
     </li>
     <li className='User__block'>
      <span>TelegramId</span>
      <h3>{student.telegramId}</h3>
     </li>
     <li className='User__block'>
      <span>Phone</span>
      <h3>{student.phone}</h3>
     </li>
     <li className='User__block'>
      <span>Name group</span>
      <h3>{student.nameGroup}</h3>
     </li>
     <li className='User__block'>
      <span>Rank</span>
      <h3>{student.rank}</h3>
     </li>
    </ul>
   </div>
  </div>
 </div>
}

export default User