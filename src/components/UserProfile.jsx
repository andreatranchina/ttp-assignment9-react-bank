import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function UserProfile() {
  return (
    <div>
        <h2>UserProfile</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/userProfile/">Details</Link>
                </li>
                <li>
                    <Link to="/userProfile/settings">Settings</Link>
                </li>
            </ul>
        </nav>

    <Routes>
        <Route path="/" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />        
    </Routes>
    </div>
  )
}

export default UserProfile