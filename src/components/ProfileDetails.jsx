import React from 'react'
import {useNavigate, Link} from 'react-router-dom';
import "./styles/profileDetails.css";


function ProfileDetails() {
    const navigate = useNavigate();
    function navigateToSettings(){
        return navigate("/userProfile/settings");
    }

  return (
    <div className="account-details-display">
        <h2>Account Details</h2>
        <h4>Number of Bank Accounts Associated: 1</h4>
        <h4>Type of Account 1: Checking Account </h4>
        <h4>Date of Account Creation: 12-29-2022</h4>
        <nav>
            <button className="settings-button" onClick={navigateToSettings}> Settings ⚙️ </button> 
            <Link className="back-to-profile-link" to="/userProfile">Back to Profile 🔙</Link>
        </nav>
    </div>

  )
}

export default ProfileDetails