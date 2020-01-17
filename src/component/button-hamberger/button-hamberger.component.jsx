import React from 'react';
import { ReactComponent as Gamepad } from '../../assets/gamepad-solid.svg';

import './button-hamberger.styles.css';

const HambergerButton = () => {
    return(
            <nav class="menu">
                <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                <label class="menu-open-button" htmlFor="menu-open">    
                    <span class="lines line-1"></span> 
                    <span class="lines line-2"></span>
                    <span class="lines line-3"></span> 
                </label>
                    <Gamepad  className="menu-item item-1"/> 
                    <Gamepad className="menu-item item-1"/> 
                    <Gamepad className="menu-item item-1"/> 
                    <Gamepad className="menu-item item-1"/> 
            </nav>
    )
}

export default HambergerButton;