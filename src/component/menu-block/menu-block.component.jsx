import React from 'react';
import SingleMenuList from '../single-menu-list/single-menu-list.component'

import './menu-block.styles.scss';

const MenuBlock = () => {
    return(
        <div className='menu-area'>
            <div className='menu-title'>
                <h3>Dummy text</h3>
                <p>View All</p>
            </div>
            <SingleMenuList />
            <SingleMenuList />
            <SingleMenuList />
        </div>
    )
}

export default MenuBlock;