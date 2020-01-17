import React from 'react';
import User from '../../assets/user.png'


const HeaderMenu = () => {
    return(
        <div className='options'>
            <img src={User} width='35px' height='35px' alt='user' className='option'/>
            <img src={User} width='35px' height='35px' alt='user' className='option'/>
            <img src={User} width='35px' height='35px' alt='user' className='option'/>
            <img src={User} width='35px' height='35px' alt='user' className='option'/>
            <img src={User} width='35px' height='35px' alt='user' className='option'/>
       </div>
    )
}

export default HeaderMenu