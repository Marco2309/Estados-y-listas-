import React from "react";
import Tweet from "./tweet/tweet";
import feed from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            newTweet: '' 
        }
    }
    
    addTweet = () => {
        const clonTweets = JSON.parse(JSON.stringify(this.state.tweets))
        const n = {
            id: 11,
            profile: "Marco Antonio",
            username: "Marco2309",
            profileUrl: this.props.profileUrl,
            content: this.state.newTweet,
            interaction: {
                comments: 0,
                retweets: 0,
                likes: 0,
                commentsDone: false,
                retweetsDone: false,
                likesDone: false
            },
            verified: true,
            blocked: true,
            menu: false
            }
            
            clonTweets.unshift(n)
            this.setState({tweets: clonTweets})
        
    }

    clicInteraccions = (id,int) => {
        // Object.keys(nombre_objeto)[indice_llave]  obtener el nombre de la llave de un objeto en una posicion especifica
        const clonTweets = JSON.parse(JSON.stringify(this.state.tweets))
        const interactionStr = int.slice(0,-4)
        const index = clonTweets.findIndex(tweet => tweet.id === id)
        let interactionBool = clonTweets[index].interaction[int]
        if(interactionBool){
            clonTweets[index].interaction[int] = !interactionBool
            clonTweets[index].interaction[interactionStr]--
        }else{
            clonTweets[index].interaction[int] = !interactionBool
            clonTweets[index].interaction[interactionStr]++
        }
        this.setState({tweets: clonTweets})
    }

    clicMenu = (id)=> {
        const clonTweets = JSON.parse(JSON.stringify(this.state.tweets))
        const index = clonTweets.findIndex(tweet => tweet.id === id)
        clonTweets[index].menu = !clonTweets[index].menu
        this.setState({tweets: clonTweets})
    }
    
    removeTweet = (id)=> {
        const clonTweets = JSON.parse(JSON.stringify(this.state.tweets))
        const index = clonTweets.findIndex(tweet => tweet.id === id)
        clonTweets.splice(index, 1)
        this.setState({tweets: clonTweets})
    }

    prueba = (e)=>{
        this.setState({newTweet: e.target.value})
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