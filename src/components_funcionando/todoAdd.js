import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

class TodoAdd extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div>
        <TextField
          id="textfield"
          name="textfield"
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}
        />
        <RaisedButton 
          label='Adicionar'
          primary={true} 
          onTouchTap={() => {
            this.props.addAfazer(this.state.value)
            this.setState({value: ''})
          }}
        />
      </div>
    )
  }
}

export default TodoAdd
