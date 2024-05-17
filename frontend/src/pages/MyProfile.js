import React from 'react';
import "../styles/MyProfile.css";
import profileImage from "../assets/profilePic.jpg"; // Import the profile image

function MyProfile() {
    return(
        <div className='MyProfile'>
            <div className="profile-section">
                <img src={profileImage} alt="Profile" className="profile-picture" />
            </div>
            <div className="input-section">
                <input type="text" placeholder="First Name" className="first-name" />
                <input type="text" placeholder="Last Name" className="last-name" />
            </div>
        </div>
    );
}

export default MyProfile;