import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

// PROPS
// addAFazer(nome)
class TodoAdd extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  atualizarValue = (e) => {
    this.setState({value: e.target.value})
  }

  salvarValue = () => {
    this.props.addAfazer(this.state.value)
  }

  render() {
    return (
      <div>
        <TextField
          id="textfield"
          name="textfield"
          value={this.state.value}
          onChange={this.atualizarValue}
        />
        <RaisedButton 
          label='Adicionar'
          primary={true} 
          onTouchTap={this.salvarValue}
        />
      </div>
    )
  }
}

export default TodoAdd
