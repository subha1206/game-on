import React from 'react'
import User from '../../assets/user.png'
import Envelop from '../../assets/envelop.jpg'
import Notification from '../../assets/bell.jpg'
import Hand from '../../assets/handshake.jpg';
import Notepad from '../../assets/Notepad.jpg'


const SideBarMenu = () => {
    return (
        <div className='options'>
            <ul>
                <li><img src={Notepad} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Hand} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Envelop} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Notification} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={User} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Notepad} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Hand} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Envelop} width='35px' height='35px' alt='user' className='option'/></li>
                <li><img src={Notification} width='35px' height='35px' alt='user' className='option'/></li>
            </ul>
       </div> 
    )
}

export default SideBarMenu;