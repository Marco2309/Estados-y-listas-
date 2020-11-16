import React from 'react';
import '../style.css';

class Trend extends React.Component{
    tranform(num){
        return( num/1000 > 1 ? (num/1000).toString()+' mil' : num )
    }
    render(){
        return(
            <div className="d-flex flex-row tweet_trend">
                <div className="d-flex flex-column col-8">
                    <div className="content_trends">Trendig Top - {this.props.category}</div>
                    <div className="content_trends">{this.props.title}</div>
                    <div className="content_trends trending_footer"><small>{this.tranform(this.props.noTweets)} Tweets</small></div>
                </div>
                <div className="col-4"><img src={this.props.image} className="imageNot" alt="Trend View" /></div>
            </div>
        )
    }

}

export default Trend;