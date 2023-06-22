import React, {useState} from 'react'
import TransactionHistoryItem from './TransactionHistoryItem';
import TransactionSubmissionForm from './TransactionSubmissionForm';

function Credits(props) {
  const [inputDate, setInputDate] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  //passed as props to TransactionSubmissionForm Child
  function handleChangeDescription(event){
    setInputDescription(event.target.value);
  }

  //passed as props to TransactionSubmissionForm Child
  function handleChangeAmount(event){
    setInputAmount(event.target.value);
  }

  //passed as props to TransactionSubmissionForm Child
  function handleChangeDate(event){
    setInputDate(event.target.value);
  }
  
  //passed as props to TransactionSubmissionForm Child, adds new transaction
  //to Transaction History, and updates Credit
  function handleSubmitNewTransaction(event){
    event.preventDefault();
    //check if form fields are filled
    if (inputDescription !== "" && inputAmount !== "" && inputDate !== ""){
      let newCredit = {
        "description": inputDescription,
        "amount": inputAmount,
        "date": inputDate
      }
      props.addCreditTransaction(newCredit);
      //reset the fields and respective values to be ""
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
            <td>Amount</td>
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