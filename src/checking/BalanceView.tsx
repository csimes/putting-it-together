import React, {Component} from "react";

type BalanceViewProps = {
  balance: number
}
export class BalanceView extends Component<BalanceViewProps, {}> {

render() {
  const {balance} = this.props
  return (
    <>
      { balance }
    </>
  )
}
}