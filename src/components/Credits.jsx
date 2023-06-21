import React, {useState} from 'react'
import TransactionHistoryItem from './TransactionHistoryItem';
import TransactionSubmissionForm from './TransactionSubmissionForm';

function Credits(props) {
  // const [creditHistory, setCreditHistory] = useState([
  //   {"description": "User Deposit",
  //   "amount": "30000.00",
  //   "date": "04-07-2023"},
  //   {"description": "User Deposit",
  //   "amount": "35330.00",
  //   "date": "06-20-2023"},           
  // ]);
  const [inputDate, setInputDate] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  function handleChangeDescription(event){
    setInputDescription(event.target.value);
  }

  function handleChangeAmount(event){
    setInputAmount(event.target.value);
  }

  function handleChangeDate(event){
    setInputDate(event.target.value);
  }
  
  function handleSubmitNewTransaction(event){
    event.preventDefault();
    if (inputDescription !== "" && inputAmount !== "" && inputDate !== ""){
      let newCredit = {
        "description": inputDescription,
        "amount": inputAmount,
        "date": inputDate
      }
      props.addCreditTransaction(newCredit);
      event.target.children[0].value = "";
      event.target.children[1].value = "";
      event.target.children[2].value = "";
      setInputAmount("");
      setInputDate("");
      setInputDescription("");
    }  
  }
  return (
    <div>
      <h1>Credits</h1>
      <h4>Account Balance $: {props.balance}</h4>
      <h4>Total Credit $: {props.credit}</h4>
      <h2>Credit History: </h2>
      <table>
        <thead>
          <tr>
            <td>Description</td>
            <td>Price</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
        {props.creditHistory.map((transaction, index)=>{
        return(<TransactionHistoryItem key={index} transaction={transaction}/>)
      })}    
        </tbody>
      </table>   
      <TransactionSubmissionForm handleChangeDescription={handleChangeDescription} 
      handleChangeAmount={handleChangeAmount} handleChangeDate={handleChangeDate} 
      handleSubmitNewTransaction={handleSubmitNewTransaction}/> 
    </div>
  )
}

export default Credits