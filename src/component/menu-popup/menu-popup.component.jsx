import React from 'react';
import { ReactComponent as Gamepad } from '../../assets/gamepad-solid.svg';

import './menu-popup.styles.scss'

class MenuPopup extends React.Component {
    constructor(){
        super()
        this.state = {
            transform: false
        }
    }
    hideMenu(){
        this.setState({transform:false})
    }
    openMenu() {
        this.setState({transform:true})
    }
    render(){
         if (this.state.transform) {
            return(
                <div>
                    <div className='toggle'>
                        <Gamepad color='crimson' className='initial' onClick={() => {this.hideMenu()}}/>
                    </div>
                    <div className='menu'>
                    <Gamepad color='white' width='16px' height='16px' className='circular'/>
                    <Gamepad color='white' width='16px' height='16px' className='circular'/>
                    <Gamepad color='white' width='16px' height='16px' className='circular'/>
                    <Gamepad color='white' width='16px' height='16px' className='circular'/>
                    <Gamepad color='white' width='16px' height='16px' className='circular'/>  
                    </div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div className='toggle'>
                        <Gamepad color='white' className='initial' onClick={() => {this.openMenu()}}/>
                    </div>
                </div>
                )
        }

}
}

export default MenuPopup