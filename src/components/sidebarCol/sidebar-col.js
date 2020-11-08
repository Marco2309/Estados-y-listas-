import React from 'react';
import './styles.css'
import {SearchSolid} from '@graywolfai/react-heroicons';
import Trend from '../trend/trend.js';
import Trends from  '../trends.js';

class SidebarCol extends React.Component {
    constructor(){
        super();
        this.state = {
            trending:Trends
        }
    }
    render(){
        return (
            <div className="t-sidebar-col">
                <div className="searchConsole">
                    <button className="btn-search"><SearchSolid /></button>
                    <input className="search" type='text'placeholder='Buscar en tweeter'/>
                </div>    
                <div>
                    <h3>Qué está pasando?</h3>
                {
                    this.state.trending.map((trends) => <Trend title={trends.title} image={trends.image} category={trends.category} noTweets={trends.noTweets}/>)
                }
                </div>
            </div>
        )
    }
}

export default SidebarCol;