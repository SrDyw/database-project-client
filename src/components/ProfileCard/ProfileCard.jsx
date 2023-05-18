import React from 'react';
import './ProfileCard.css';

const ProfileCard = (props) => {
    return <div className='profile-container'>
        <div className="user-image">
            <img src={''} alt={'Image not found'} />
        </div>
        <div className="content">
            <h3 className="name">{props.name}</h3>
            <p className="username">{props.username}</p>

            <p className="details">All your stats and description</p>
            <a href="#" className="effect effect-4">Go to profile</a>
        </div>
    </div>
}

export default ProfileCard;