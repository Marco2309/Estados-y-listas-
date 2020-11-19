import React from 'react';
import './styles.css';

class PostTweet extends React.Component{
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    handleMenssage = (e) => {
        this.setState({message: e.target.value})
    }

    render(){
        return (
            <div>
                <div className="t-row t-post-tweet">
                    <div className="t-profile-img">
                        <img src={this.props.profileUrl}  alt="profile" />
                    </div>
                    <form>
                         {/* handleMenssage se activa con cada cambio y guarda el contenido del tweet en el state */}
                        <input placeholder="¿Qué está pasando?" onChange={(e)=>this.handleMenssage(e)}/>
                        <div className="t-post-options">
                            {/* al dar click en el boton se envia el estado al componente primary-col donde tambien esta feed */}
                            <button onClick={(e)=>this.props.handleTwittear(e,this.state.message)}>Twittear</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}
export default PostTweet;