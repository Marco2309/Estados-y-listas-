import React from 'react';
import './styles.css'
import {SearchSolid} from '@graywolfai/react-heroicons'
import Trend from '../trend/trend.js'
import Trends from  '../trends.js'
import users from '../../users'
import SearchDropdown from '../SearchDropdown/SearchDropdown'

class SidebarCol extends React.Component {
    constructor(){
        super();
        this.state = {
            trending: Trends,
            profiles: users,
            search: false,
            profilesPrint: []
        }
    }

    matchesName = (e) => {
        const users = this.state.profiles
        let search = e.target.value.toLowerCase()
        let indices = [];
        let printUsers = []
        if (search){
            this.setState({search: true})
            users.map((profile, index)=> {
                const str = profile.username.toLowerCase()
                let idx = str.indexOf(search)
                if (idx === 0)indices.push(index)
                return indices
             })
        }else{
            this.setState({search: false})
        }   
        if(indices.length){
            users.map((profile, index)=> {
                if(indices.includes(index)) printUsers.push(profile)
                return 1
            })
        }  
        this.setState({profilesPrint: printUsers})  
    }

    render(){
        return (
            
            <div className="t-sidebar-col">
                <div className="searchArea">
                    <div className="searchConsole">
                        <div className="btn-search"><SearchSolid /></div>
                        <input 
                            className="search" 
                            type='text'
                            placeholder='Buscar en tweeter'
                            onChange={(e)=>this.matchesName(e)}
                        />
                    </div>
                    {this.state.search && <SearchDropdown users={this.state.profilesPrint}/>}  
                </div>   
                <div>
                    <h3>Qué está pasando?</h3>
                {
                    this.state.trending.map((trends, index) => 
                    <Trend 
                        key={index}
                        title={trends.title} 
                        image={trends.image} 
                        category={trends.category} 
                        noTweets={trends.noTweets}
                    />)
                }
                </div>
            </div>
        )
    }
}

export default SidebarCol;