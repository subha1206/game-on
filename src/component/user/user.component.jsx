import React from 'react';
import Calendar from '../../assets/calendar.jpg'
import { ReactComponent as User} from '../../assets/user-regular.svg'
import { ReactComponent as Progress } from '../../assets/spinner-solid.svg'

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
                <div className='tasks'>
                    <span>Daily Tasks</span>
                    <Progress className='user' width='65px' height='80px' color='white'/>
                </div>
                <div className='tasks'>
                    <span>Monthly tasks</span>
                    <Progress className='user' width='65px' height='80px' color='white' />
                </div>
            </div>
        </div>
    )
}

export default UserCard;