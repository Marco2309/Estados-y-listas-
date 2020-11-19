import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import './styles.css'

class PrimaryCol extends React.Component{
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    handleTwittear = (e,m) => {
        this.setState({message: m})
        e.preventDefault()
    }

    render(){
        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet 
                    profileUrl={this.props.profileUrl}
                    handleTwittear={this.handleTwittear}
                />
                {/* La funcion handleTwittear guarda el estado del componente pos-tweet en el estado de este componente y luego se manda como prop a feed */}
                <Feed message={this.state.message}/>
            </div>
        )
    }
    
}
export default PrimaryCol;