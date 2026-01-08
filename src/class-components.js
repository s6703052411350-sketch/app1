import React, { Component } from 'react'

export default class Button extends Component {
  constructor(){
    super()
    this.onClickButtonOk = this.onClickButtonOk.bind(this)
  }

  showAlert(msg){
    alert(msg)
  }
  onClickButtonOk=()=>{
    this.showAlert('Hello')
  }
  render() {
    return <button onClick={this.onClickButtonOk}>OK</button>
  }
}