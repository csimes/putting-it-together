import React, {Component} from "react";

type HeaderProps = {
  brand: string
}

export class Header extends Component<HeaderProps, {}> {
render() {
  const {brand} = this.props
  return (
    <nav>
      <h1> {brand} </h1>
    </nav>
  )
}
}

