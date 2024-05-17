import React from 'react';
import "../styles/MyProfile.css";
import profileImage from "../assets/profilePic.png"; // Import the profile image

function MyProfile() {
    const handleChooseClick = () => {
        console.log("Choose button pressed");
    };

    const handleSaveClick = () => {
        console.log("Save button pressed");
    };

    // Hardcoded country code for demonstration purposes
    const countryCode = "IT"; // You can change this to any valid country code

    return (
        <div className='MyProfile'>
            <div className="profile-section">
                <img src={profileImage} alt="Profile" className="profile-picture" />
                <button className="choose-button" onClick={handleChooseClick}>Choose</button>
            </div>
            <div className="input-section">
                <div className="input-with-flag">
                    <input type="text" placeholder="First Name" className="first-name" />
                    <img 
                        src={`https://flagsapi.com/${countryCode}/flat/32.png`} 
                        alt="Country Flag" 
                        className="country-flag" 
                    />
                </div>
                <div className="input-with-flag">
                    <input type="text" placeholder="Last Name" className="last-name" />
                    <img 
                        src={`https://flagsapi.com/${countryCode}/flat/32.png`} 
                        alt="Country Flag" 
                        className="country-flag" 
                    />
                </div>
                <button className="save-button" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default MyProfile;
