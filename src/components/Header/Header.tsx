import { FC } from 'react'
import Logo from '@/components/icons/IconLogo'
import { NavLink } from "react-router";
import "./header.scss"

const Header: FC = () => {
  return (
    <div className='header'>

      <div className='header__container'>

        <Logo />

        <ul className='header__menu'>
          <li className='header__menu-item'>
            <NavLink to="/" className='header__menu-link'>home</NavLink>
          </li>
          <li className='header__menu-item'>
            <NavLink to="/destination" className='header__menu-link'>destination</NavLink>
          </li>
          <li className='header__menu-item'>
            <NavLink to="/crew" className='header__menu-link'>crew</NavLink>
          </li>
          <li className='header__menu-item'>
            <NavLink to="/tehnology" className='header__menu-link'>tehnology</NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header
