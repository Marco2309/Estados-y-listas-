import React from 'react';
import PrimaryCol from '../primaryCol/primary-col';
import SidebarCol from '../sidebarCol/sidebar-col';

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }
    render(){
        return (
            <div className="t-main">
                <PrimaryCol profileUrl={this.props.profileUrl} />
                <SidebarCol cambiarImagen={this.props.cambiarImagen}/>
            </div>
        )
    }
}
export default Main;