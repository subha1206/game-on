import React from 'react'
import { ReactComponent as Gamepad } from '../../assets/gamepad-solid.svg';

import './side-float-menu.styles.scss'

class SideFloatMenu extends React.Component {
    constructor(){
        super()
        this.state ={
            active: false
        }
    }
    toggleBox = () => {
        this.setState(prevState => ({ active: !prevState.active}));
      };
    render(){
        const { active } =this.state
    return(
        <div>
            <div id="circularMenu" class={`circular-menu ${active ? 'active' :'' }`}>
                <Gamepad class="floating-btn" onClick={this.toggleBox}/>
                    <menu class="items-wrapper">
                       <Gamepad class="menu-item"/>
                       <Gamepad class="menu-item"/>
                       <Gamepad class="menu-item"/>
                       <Gamepad class="menu-item"/>
                    </menu>
            </div>
        </div>
                  
    )
}
}

export default SideFloatMenu;
