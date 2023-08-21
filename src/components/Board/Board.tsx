import { FC } from "react"
import './Board.scss'

interface IBoardProps {
 title: string,
 description: string
}

const Board: FC<IBoardProps> = ({title, description}) => {
 return <div className="Board">
  <h1>{title}</h1>
  <span>{description}</span>
 </div>
}

export default Board