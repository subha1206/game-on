import React from 'react'
import { ReactComponent as UseR } from '../../assets/user-regular.svg'
import { ReactComponent as NotePad } from '../../assets/clipboard-regular.svg'
import {ReactComponent as Hand } from '../../assets/handshake-regular.svg'
import { ReactComponent as Notification } from '../../assets/bell-regular.svg';
import { ReactComponent as Envelop } from '../../assets/envelope-solid.svg';
import { ReactComponent as Gamepad } from '../../assets/gamepad-solid.svg';



const SideBarMenu = () => {
    return (
        <div className='options'>
            <ul>
                <li><UseR className='option'/></li>
                <li><NotePad className='option'/></li>
                <li><Gamepad className='option'/></li>
                <li><Hand className='option' /></li>
                <li><NotePad className='option' /></li>
                <li><Notification className='option' /></li>
                <li><Envelop className='option'/></li>
                <li><Gamepad className='option'/></li>
                <li><Gamepad className='option'/></li>
            </ul>
       </div> 
    )
}

export default SideBarMenu;