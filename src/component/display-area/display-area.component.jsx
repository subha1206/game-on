import React from 'react';
import MenuBlock from '../menu-block/menu-block.component'
import UserCard from '../user/user.component'
import TeamCard from '../team/team-details.component'

import './display-area.styles.scss'
const DisplayArea  = () => {
    return (
        <div className='main-display'>
            <MenuBlock />
            <MenuBlock />
            <MenuBlock />
            <UserCard />
            <MenuBlock />
            <TeamCard />
        </div>

    )
}

export default DisplayArea;