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

  teste = (nome) => {
    console.log(nome)
    console.log(this.state.afazeres)
  }

  addAfazer = (nome) => {
    let afazeres = [...this.state.afazeres]
    afazeres.push(nome)
    this.setState({afazeres})
  }

  render() {
    this.teste('Afazeres')
    return (
      <div className='text-center'>
        <AppBar 
          title='Lista de afazeres'
          iconElementLeft={<div />}
        />
        <TodoAdd addAfazer={this.addAfazer}/>
        <TodoList afazeres={this.state.afazeres}/>
      </div>
    )
  }
}

export default Todo
