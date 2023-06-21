import React, {useState} from 'react'
import TransactionHistoryItem from './TransactionHistoryItem';
import TransactionSubmissionForm from './TransactionSubmissionForm';

function Debits(props) {
  // const [debitHistory, setDebitHistory] = useState([
  //   {"description": "Samsung 8K QLED TV",
  //   "amount": "7500.00",
  //   "date": "06-01-2023"},
  //   {"description": "Apple Vision Pro",
  //   "amount": "5000.00",
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
      let newDebit = {
        "description": inputDescription,
        "amount": inputAmount,
        "date": inputDate
      }
      props.addDebitTransaction(newDebit);
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
            <td>Price</td>
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