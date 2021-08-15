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
            return (
              <div className="category">
                <h1>{value.category}</h1>;
                <div className="submenu">
                  {value.lists.map((item) => (
                    <div className="item">
                      <img src={item.src} alt="" />
                      <h2>{item.title}</h2>
                      <h3>{item.price} so'm</h3>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="order">Order</div>
      </div>
    )
  }
}
