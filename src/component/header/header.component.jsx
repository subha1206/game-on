import React from 'react';
import HeaderMenu from '../header-menu/heder-menu.component'
import {getCurrentDate} from './header.utils'
import { ReactComponent as Logo } from '../../assets/gamepad-solid.svg'
import './header.styles.scss'


const Header = () => {
    return(
        <div className='header-component'>
            <div className='user-name'>
                <span>Hii, John Doe</span> <br />
                MY PERSONAL DASHBOARD
            </div>
            <div className='logo-container'>
                <Logo />
            </div>
            <div className='date-time'>
                <span>{getCurrentDate()}</span>
            </div>
              <HeaderMenu />
        </div>
    )
}

export default Header;