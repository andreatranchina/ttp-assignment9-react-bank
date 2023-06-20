import React from 'react'
import {useNavigate, Link} from 'react-router-dom';


function ProfileDetails() {

    const navigate = useNavigate();

    function navigateToSettings(){
        return navigate("/userProfile/settings");
    }

  return (

    <div>
        <div>ProfileDetails</div>
        <button onClick={navigateToSettings}> Go to Settings</button> 
        <nav>
            <ul>
                <li>
                    <Link to="/userProfile">Back to Profile</Link>
                </li>
            </ul>
        </nav>
    </div>

  )
}

export default ProfileDetails