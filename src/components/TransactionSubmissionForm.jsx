import React from 'react'
import "./styles/transactionSubmissionForm.css";

function TransactionSubmissionForm(props) {
  return (
    <form className="submission-form" onSubmit={props.handleSubmitNewTransaction}>
        <input className="submission-input" type="text" placeholder="description" onChange={props.handleChangeDescription}></input>
        <input className="submission-input" type="number" min="0.01" step="0.01" placeholder="amount" onChange={props.handleChangeAmount}></input>
        <input className="submission-input" type="date" placeholder="date" onChange={props.handleChangeDate}></input>
        <button className="submission-button">Add Transaction</button>
        <h5>(All fields mandatory)</h5>
    </form>
  )
}

export default TransactionSubmissionForm