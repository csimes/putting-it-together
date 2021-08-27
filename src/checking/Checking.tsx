import React, {Component} from "react";
import { BalanceView } from "./BalanceView";
import { TransactionForm } from "./TransactionForm";
import { TransactionHistory } from "./TransactionHistory";

type CheckingProps = {}
type CheckingState = {
  balance: number
}

export class Checking extends Component<CheckingProps, CheckingState> {
  constructor(props: CheckingProps){
    super(props)
    this.state = {
      balance: 0
    }
    this.updateBalance = this.updateBalance.bind(this)
  }


  updateBalance(amount: number){
    this.setState({balance: this.state.balance + amount})
  }

  render() {
    const {balance} = this.state;
  return (
    <>
    <section>
      <BalanceView balance={balance}/>
      <TransactionForm handleSubmit={this.updateBalance}/>
    </section>
    <section>
      <TransactionHistory />
    </section>
    </>
  )
}
}

