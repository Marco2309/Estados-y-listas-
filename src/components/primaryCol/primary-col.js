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

    handleTwittear = (e) => {        
        this.setState({message: e.target.value})  
        this.chill.prueba(e)

    }
    prueba = (e)=>{
        e.preventDefault()
        this.chill.addTweet()
        this.setState({message: ''})
    }
    
    render(){
        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet 
                    profileUrl={this.props.profileUrl}
                    handleTwittear={this.handleTwittear}
                    prueba={this.prueba}
                    val={this.state.message}
                />
                {/* La funcion handleTwittear guarda en el estado el contenido del tweet y se manda a feed como prop*/}
                <Feed 
                    profileUrl={this.props.profileUrl}
                    // message={this.state.message}
                    ref={element => {this.chill = element}}
                />
            </div>
        )
    }
    
}
export default PrimaryCol;