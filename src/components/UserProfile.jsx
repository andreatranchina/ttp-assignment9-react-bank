import {Routes, Route, Link} from "react-router-dom";
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import "./styles/userProfile.css";

function UserProfile() {
  return (
    <div>
        <h1>User Profile</h1>
        <nav class="nav">
            <Link className="user-profile-link" to="/userProfile/details">Details</Link>
            <Link className="user-profile-link" to="/userProfile/settings">Settings</Link>
            <Link className="user-profile-link" to="/userProfile/">Back to Profile</Link>
        </nav>
        <div className= "user-display">
            <h3>Account Holder: John Doe</h3>
            <h3>Email Address: John.Doe@gmail.com</h3>
            <h3>Phone Number: 718-395-3492</h3>
            <h3>Address: 7477 Oakland Dr</h3>
        </div>

    <Routes>
        <Route path="/details" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />        
    </Routes>
    </div>
  )
}

export default UserProfile