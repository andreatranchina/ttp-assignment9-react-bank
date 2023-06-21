import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/home.css";

function Home(props) {
  const navigate = useNavigate();
  function navigateToDetails(){
      return navigate("/userProfile/details");
  }
  function navigateToSettings(){
    return navigate("/userProfile/settings")
  }
  return (
    <div>
        <h1>Home</h1>
        <div className="summary">
          <h2><span>Account Number:</span> 251376539 </h2>
          <h2><span>Account Holder:</span> John Doe</h2>
          {props.credit && <h2><span>Total Credits: </span>${props.credit}</h2>}
          {props.debit && <h2><span>Total Debits: </span>${props.debit}</h2>}
          {props.balance && <h2><span>Total Balance: </span>${props.balance}</h2>}
        </div>
        <nav>
            <button className="settings-button" onClick={navigateToSettings}> Settings ⚙️ </button> 
            <button className="settings-button" onClick={navigateToDetails}> Details ℹ️ </button> 
        </nav>
    </div>
  )
}

export default Home