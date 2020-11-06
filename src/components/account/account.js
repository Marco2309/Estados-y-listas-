import React from 'react';

const Account = (props) => {
    return (
        <div className="t-profile-img">
            <img src={props.profileUrl} alt='imageAccount' />
        </div>
    )
}

export default Account;