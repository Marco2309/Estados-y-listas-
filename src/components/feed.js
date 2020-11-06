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

    render() {

        // const {profile, profileName, username, content, display} = {
        //     profile: "",
        //     profileName: "",
        //     username: "",
        //     content: "",
        //     display: ""
        // };

        return (
            <div>
                {
                    this.state.tweets.map( (tweet, index) => {
                        return (
                            <Tweet
                                key={index.toString()}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}/>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;