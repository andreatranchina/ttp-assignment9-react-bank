import React from 'react'
import {useNavigate, Link} from 'react-router-dom';
import "./styles/profileDetails.css";

function ProfileSettings() {
  const navigate = useNavigate();
  function navigateToDetails(){
      return navigate("/userProfile/details");
  }

  return (
    <div className="account-details-display">
    <h2>Account Settings</h2>
    <h4>Direct Deposit: Activated</h4>
    <h4>Paperless Statements: Activated </h4>
    <h4>Visit us to request changes!</h4>
    <nav>
        <button className="settings-button" onClick={navigateToDetails}> Details ℹ️ </button> 
        <Link className="back-to-profile-link" to="/userProfile">Back to Profile 🔙</Link>
    </nav>
</div>
  )
}

export default ProfileSettings