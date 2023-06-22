import React, {useState} from 'react'
import TransactionHistoryItem from './TransactionHistoryItem';
import TransactionSubmissionForm from './TransactionSubmissionForm';

function Debits(props) {
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
  //to Transaction History, and updates Debit  
  function handleSubmitNewTransaction(event){
    event.preventDefault();
    //ensure that form fields have been filled
    if (inputDescription !== "" && inputAmount !== "" && inputDate !== ""){
      let newDebit = {
        "description": inputDescription,
        "amount": inputAmount,
        "date": inputDate
      }
      props.addDebitTransaction(newDebit);
      //reset form fields and respective values to "" after submission
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
      <h1>Debits</h1>
      <h4>Account Balance $: {props.balance}</h4>
      <h4>Total Debit $: {props.debit}</h4>
      <h2>Debit History: </h2>
      <table>
        <thead>
          <tr>
            <td>Description</td>
            <td>Amount</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
        {props.debitHistory.map((transaction, index)=>{
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

export default Debits