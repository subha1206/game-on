import React from 'react';
import Envelop from '../../assets/envelop.jpg'

import './user.styles.scss'

const UserCard = () => {
    return(
        <div className='user-card'>
            <img src={Envelop} alt="user" width='100px' height='100px'/>
            <p>Jonh Doe</p><br/>
            <p>He is cool</p>
                <div>
                    <h1>Calendar</h1>
                </div>
            <div>
                <h2>wheel</h2>
                <h2>whell</h2>
            </div>
        </div>
    )
}

export default UserCard;