import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    clicInteraccions = (index,int) => {
        // Object.keys(interaction)[3]  obtener el valor de un objeto en una posicion especifica
        const newTweets = JSON.parse(JSON.stringify(this.state.tweets))
        const interactionStr = int.slice(0,-4)
        let interactionBool = newTweets[index].interaction[int]
        if(interactionBool){
            newTweets[index].interaction[int] = !interactionBool
            newTweets[index].interaction[interactionStr]--
        }else{
            newTweets[index].interaction[int] = !interactionBool
            newTweets[index].interaction[interactionStr]++
        }
        this.setState({tweets: newTweets})
    }

    clicMenu = (index)=> {
        const newTweets = JSON.parse(JSON.stringify(this.state.tweets))
        console.log('clicMenu',index)
        newTweets[index].menu = !newTweets[index].menu
        this.setState({tweets: newTweets})
    }
    
    removeTweet = (index)=> {
        const newTweets = JSON.parse(JSON.stringify(this.state.tweets))
        console.log('removeTweet',index)
        newTweets.splice(index, 1)
        this.setState({tweets: newTweets})
    }

    render() {
        return (
            <div>
                {
                    this.state.tweets.map( (tweet,i) => {
                        return (
                            <Tweet
                                key={i}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                id = {tweet.id}
                                menu = {tweet.menu}
                                clic={this.clicInteraccions}
                                clicMenu={this.clicMenu}
                                remove = {this.removeTweet}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Feed;