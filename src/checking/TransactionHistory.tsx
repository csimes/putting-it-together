import React, { Component } from "react";
import { Transaction } from "./Checking"

type TransactionHistoryProps = {
  transactions: Transaction[]
}
export class TransactionHistory extends Component<TransactionHistoryProps, {}> {

render() {
  const { transactions } = this.props;
  return (
    <ul>
      {transactions.map((t, index) => {
        return (
          <li key={index}>
            {`Type: ${t.type} ... Amount: ${t.amount}`}
          </li>
        )
      })}
          
          
        
    </ul>
  )
}
}