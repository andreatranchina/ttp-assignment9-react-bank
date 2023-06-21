import React from 'react'

function TransactionHistoryItem(props) {
  return (
        <tr className="item-row">
          <td className="item-column">{props.transaction.description}</td>
          <td className="item-column">{props.transaction.amount}</td>
          <td className="item-column">{props.transaction.date}</td>
        </tr>
  )
}

export default TransactionHistoryItem