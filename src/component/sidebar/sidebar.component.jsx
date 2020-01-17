import React from 'react'
import SideBarMenu from '../sidebar-menu/sidebar-menu.component'

import './sidebar.styles.scss'

const SideBar = () => {
    return (
        <div className='sidebar-component'>
            <SideBarMenu />
        </div>
    )
}

export default SideBar;