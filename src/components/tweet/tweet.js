import React from 'react';
import './styles.css';

import {
    ChatSolid,
    HeartSolid,
    RefreshOutline
} from "@graywolfai/react-heroicons";
class Tweet extends React.Component{
    constructor() {
        super(); //Es necesario colocar super para poder crear mi estado para este componente
        this.state = {
            iconArray: [ 
              < ChatSolid />,
              < RefreshOutline />, 
              < HeartSolid />
            ]
        }
    }
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" /> {/*imagenes*/}
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row space">
                    <span>
                        < ChatSolid />
                        <p>{this.props.comments}</p>
                    </span>
                    <span>
                    < RefreshOutline />
                        <p>{this.props.retweets}</p>
                    </span>
                    <span>
                    < HeartSolid />
                        <p>{this.props.likes}</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.