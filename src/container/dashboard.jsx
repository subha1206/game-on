import React from 'react';
import Header from '../component/header/header.component'
import SideBar from '../component/sidebar/sidebar.component'

import DisplayArea from '../component/display-area/display-area.component'
const DashBoard  = () => {

    return (
        <div>
            <Header />
            <SideBar />
            <DisplayArea />
        </div>
    )
}

export default DashBoard;