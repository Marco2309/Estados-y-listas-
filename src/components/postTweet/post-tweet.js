import React from 'react';
import './styles.css';

class PostTweet extends React.Component{

    render(){
        return (
            <div>
                <div className="t-row t-post-tweet">
                    <div className="t-profile-img">
                        <img src={this.props.profileUrl}  alt="profile" />
                    </div>
                    <form>
                         {/* manda el contenido del tweet a primari col */}
                        <input 
                            placeholder="¿Qué está pasando?" 
                            onChange={(e)=>this.props.handleTwittear(e)}
                            value={this.props.val}
                        />
                        <div className="t-post-options">
                            {/*al dar click la funcion de prueba en primary-col imprime estado en consola */}
                            <button onClick={(e)=>this.props.prueba(e)}>Twittear</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}
export default PostTweet;