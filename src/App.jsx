import React, { Component } from 'react'
import { data } from './mock'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      total: 0,
    }
  }
  render() {
    const onSelect = (value) => {
      const selected = [
        ...this.state.selected,
        { ...value, selectedId: this.state.selected.length },
      ]
      this.setState({ selected })
      selected.forEach((value) =>
        this.setState({ total: this.state.total + value.price }),
      )
    }
    const onDelete = (id) => {
      const selected = this.state.selected.filter((value) => {
        value.selectedId === id &&
          this.setState({ total: this.state.total - value.price })
        return value.selectedId !== id
      })
      this.setState({ selected })
    }
    return (
      <div className="wrapper">
        <div className="menu">
          {data.map((value) => {
            return (
              <div className="category">
                <h1>{value.category}</h1>;
                <div className="submenu">
                  {value.lists.map((item) => (
                    <div onClick={() => onSelect(item)} className="item">
                      <img src={item.src} alt="" />
                      <h2>{item.title}</h2>
                      <h3 className="price">{item.price} so'm</h3>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="order">
          <h1 className="total">Order</h1>
          {this.state.selected.length <= 0 && (
            <h2 className="">Not selected</h2>
          )}
          {this.state.selected.map((value) => (
            <div className="order">
              <h1>
                {value.title} - {value.price} so'm
                <button
                  className="btn btn-primary"
                  onClick={() => onDelete(value.id)}
                >
                  delete
                </button>
              </h1>
            </div>
          ))}
          <h1 className="total">Total {this.state.total} so'm</h1>
          <button onClick={() => this.setState({ selected: [], total: 0 })}>
            cancel
          </button>
          <button>order</button>
        </div>
      </div>
    )
  }
}
