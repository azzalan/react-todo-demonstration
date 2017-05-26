import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Todo from './components/todo'
import Test from './components/Test'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
       <Test />
      </MuiThemeProvider>
    )
  }
}

export default App
