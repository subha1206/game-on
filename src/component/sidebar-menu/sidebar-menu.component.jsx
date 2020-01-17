import React from 'react'
import { ReactComponent as UseR } from '../../assets/user-regular.svg'
import { ReactComponent as NotePad } from '../../assets/clipboard-regular.svg'
import {ReactComponent as Hand } from '../../assets/handshake-regular.svg'
import { ReactComponent as Notification } from '../../assets/bell-regular.svg';
import { ReactComponent as Gamepad } from '../../assets/gamepad-solid.svg';
import HambergerButton from '../../component/button-hamberger/button-hamberger.component'



const SideBarMenu = () => {
    return (
        <div className='options'>
            <ul>
                <li><UseR className='option'/></li>
                <li><NotePad className='option'/></li>
                <li><Gamepad className='option'/></li>
                <li><Hand className='option' /></li>
                <li><Notification className='option' /></li>
            </ul>
            <HambergerButton />
       </div> 
    )
}

export default SideBarMenu;