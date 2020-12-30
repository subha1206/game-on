import React from 'react';
import Header from '../component/header/header.component'
import SideBar from '../component/sidebar/sidebar.component'
import DisplayArea from '../component/display-area/display-area.component'
import SideFloatMenu from '../component/side-float-menu/side-float-menu'

const DashBoard  = () => {

    return (
        <div>
            <Header />
            <SideBar />
            <DisplayArea />
            <SideFloatMenu />
        </div>
    )
}

export default DashBoard;