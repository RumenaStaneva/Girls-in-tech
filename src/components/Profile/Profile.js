import React from 'react';

const Profile = () => {
    const username = localStorage.getItem('username')
    return (
        <div>
            <h1>Hello {username}</h1>
        </div>
    );
};

export default Profile;