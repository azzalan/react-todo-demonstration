import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import TodoAdd from './todoAdd'
import TodoList from './todoList'

// TESTAR
// this.state.afazeres
// this.addAfazer()
// render()

class Todo extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     afazeres: [],
  //   }
  // }

  // CERTO
  // addAfazer = (nome) => {
  //   let afazeres = [...this.state.afazeres]
  //   afazeres.push(nome)
  //   this.setState({afazeres})
  // }

  // ERRADO
  // addAfazer = (nome) => {
  //   this.state.afazeres.push(nome)
  // }

  // teste = () => {
  //   console.log('this.state.afazeres')
  //   console.log(this.state.afazeres)
  // }

  render() {
    // this.teste()
    return (
      <div>
        {/*<AppBar 
          title='Lista de afazeres'
          iconElementLeft={<div />}
        />*/}
        {/*<button onTouchTap={() => this.addAfazer('Qualquer')}> Testar addAfazer </button>*/}
        {/*<TodoAdd addAfazer={this.addAfazer}/>
        <TodoList afazeres={this.state.afazeres}/>*/}
      </div>
    )
  }
}

export default Todo
