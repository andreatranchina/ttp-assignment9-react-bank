import './App.css';
import React, {useState, useEffect} from 'react'
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';

import axios from "axios";

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Credits from "./components/Credits";
import Debits from "./components/Debits";


function App() {
  const [credit, setCredit] = useState();
  const [debit, setDebit] = useState();
  const [balance, setBalance] = useState();

  const [debitHistory, setDebitHistory] = useState([
    {"description": "Samsung 8K QLED TV",
    "amount": "7500.00",
    "date": "06-01-2023"},
    {"description": "Apple Vision Pro",
    "amount": "5000.00",
    "date": "06-20-2023"},           
  ]);

  const [creditHistory, setCreditHistory] = useState([
    {"description": "User Deposit",
    "amount": "30000.00",
    "date": "04-07-2023"},
    {"description": "User Deposit",
    "amount": "35330.00",
    "date": "06-20-2023"},           
  ]);
  
  useEffect(() =>{
    const getData = async () => {
        try{
            const resDebit = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits');
            setDebit(Number(resDebit.data));
            console.log(resDebit);
            const resCredit = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits');
            setCredit(Number(resCredit.data));
            console.log(resCredit);    
            // setBalance(credit-debit);       
        } 
        catch(err){
            console.log(err.message)
        }   
    }
    getData();
  }, []);

  useEffect(()=>{
    const determineBalance = async () =>{
      try{
        setBalance(credit-debit); 
      }
      catch(err){
        console.log(err.message);
      }
    }
    determineBalance();
  }, [debit, credit])

  function addDebitTransaction(newDebit){
    setDebitHistory([...debitHistory, newDebit]);
    setDebit(debit + Number(newDebit.amount));
  }

  function addCreditTransaction(newCredit){
    setCreditHistory([...creditHistory, newCredit]);
    setCredit(credit + Number(newCredit.amount));
  }

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/debits">Debits</Link>
            <Link className="link" to="/credits">Credits</Link>
            <Link className="link" to="/userProfile">Profile</Link>
        </nav>
        {/* <h1>Welcome to Your Bank Account</h1>
        <img alt="bank-image" src="https://www.upflip.com/wp-content/uploads/2021/02/bank-building.jpg"></img> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home credit={credit} debit={debit} balance={balance}/>} />
          <Route path="/debits" element={<Debits debit={debit} balance={balance}  
          addDebitTransaction={addDebitTransaction} debitHistory={debitHistory}/>} />
          <Route path="/credits" element={<Credits credit={credit} balance={balance} 
          addCreditTransaction={addCreditTransaction} creditHistory={creditHistory}/>} />
          <Route path="/userProfile/*" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
