import { FC, useState } from 'react'
import s from './landing.module.scss'
import { NavLink } from 'react-router-dom'

const Landing: FC = () => {
 const [isBurger, setIsBurger] = useState<boolean>(false)

 return <div className={s.Landing}>
  <div className={s.Landing__header}>
   <div className={s.Landing__header__conteiner}>
    <NavLink to={'/landing'}><img className={s.Landing__logo} src="/img/logo.png" alt="" /></NavLink>
    <ul className={s.Landing__navbar}>
     <li>Тарифы</li>
     <li>Контакты</li>
     <li>Блог</li>
     <li>О нас</li>
     <li>
      <NavLink className={s.Landing__link} to={'/'}><button className={s.Landing__button}>Попробовать бесплатно</button></NavLink>
     </li>
    </ul>
    <button className={s.Landing__burgerButton} onClick={() => { setIsBurger(!isBurger) }}><img src='/img/menu.png'/></button>
   </div>
   <ul className={`${s.Landing__navbar} ${s.Landing__navbarBurger}`} style={{
    display: isBurger ? 'block' : 'none'
   }}>
    <li>Тарифы</li>
    <li>Контакты</li>
    <li>Блог</li>
    <li>О нас</li>
    <li>
     <NavLink className={s.Landing__link} to={'/'}><button className={s.Landing__button}>Попробовать бесплатно</button></NavLink>
    </li>
   </ul>
  </div>
  <div className={s.Landing__banner}>
   <h1 className={s.Landing__title}>CRM для учебного заведения</h1>
   <p className={s.Landing__description}>Клиенты, расписание, склад, зарплата, уведомления, финансы, онлайн-запись, ip-телефония, мобильное приложение</p>
   <button className={s.Landing__button}><NavLink className={s.Landing__link} to={'/'}>Попробовать бесплатно на 7 дней</NavLink></button>
   <img src="/img/macbook.png" alt="" />
  </div>
 </div>
}

export default Landing