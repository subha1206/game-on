import React from 'react';
import Calendar from '../../assets/calendar.jpg'
import Circel from '../../assets/circle.jpg'
import { ReactComponent as User} from '../../assets/user-regular.svg'

import './user.styles.scss'

const UserCard = () => {
    return(
        <div className='user-card'>
            <User className='user' width='100px' height='100px' color='crimson'/>
            <p>Jonh Doe</p><br/>
            <p>He is cool</p>
                <div>
                    <br></br>
                    <img src={Calendar} alt="calendar" width='200px' height='150px' />
                </div>
            <div className='progress-section'>
            <img src={Circel} alt="calendar" width='200px' height='150px'/>
            <img src={Circel} alt="calendar" width='200px' height='150px'/>
            </div>
        </div>
    )
}

export default UserCard;