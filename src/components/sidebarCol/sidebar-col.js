import React from 'react';
import './styles.css'

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <input className="search" type='text'placeholder='Buscar en tweeter'/>
        </div>
    )
}

export default SidebarCol;