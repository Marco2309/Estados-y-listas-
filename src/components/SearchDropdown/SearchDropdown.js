import React from 'react'
import './styles.css'

class SearchDropdown extends React.Component {
    // constructor(){
    //     super()
    // }
    
    render(){
        return(
            <div className='SearchDropdown'>
                {
                    this.props.users.map(user => {
                        return(
                            <div key={user.id}>
                                <div className='profile-user'>
                                    <div className='img-box'>
                                        <img className='profileImg' src={user.profileImg} alt='profile-img'/>
                                    </div>
                                    <div className='profile-names'>
                                        <p className='profile-apodo'>{user.profile}</p>
                                        <p className='profile-name'>{`@${user.username}`}</p>
                                    </div>
                                </div>
                                <hr className='hr'/>
                            </div>
                            
                            
                        )
                    })
                }
                
            </div>
        )
    }
}

export default SearchDropdown