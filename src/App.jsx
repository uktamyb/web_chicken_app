import React, { Component } from 'react'
import { data } from './mock'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="wrapper">
        <div className="menu">
          {data.map((value) => {
            return <h1>{value.category}</h1>
          })}
        </div>
        <div className="order">Order</div>
      </div>
    )
  }
}
