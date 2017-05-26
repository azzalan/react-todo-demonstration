import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import TodoAdd from './todoAdd'
import TodoList from './todoList'

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      afazeres: [],
    }
  }

  addAfazer = (nome) => {
    this.state.afazeres.push(nome)
  }

  render() {
    return (
      <AppBar 
        title='Lista de afazeres'
        iconElementLeft={<div />}
      />
      <TodoAdd addAfazer={this.addAfazer}/>
      <TodoList afazeres={this.state.afazeres}/>
    )
  }
}

export default Todo
