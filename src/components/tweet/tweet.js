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
    divide = (num)=>{
        return(num/1000 > 1 ? (num/1000).toString()+' mil' : num);
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
                    <span onClick={()=>this.props.clic(this.props.id, 'commentsDone')}>
                        
                        < ChatSolid />
                        <p>{this.divide(this.props.comments)}</p>
                    </span>
                    <span onClick={()=>this.props.clic(this.props.id, 'retweetsDone')}>
                    < RefreshOutline />
                        <p>{this.divide(this.props.retweets)}</p>
                    </span>
                    <span onClick={()=>this.props.clic(this.props.id, 'likesDone')}>
                    < HeartSolid />
                        <p>{this.divide(this.props.likes)}</p>
                    </span>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.