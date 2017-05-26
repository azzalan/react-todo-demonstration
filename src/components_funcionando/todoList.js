import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox';

class TodoList extends Component {

  renderAfazeres = (style) => (
    this.props.afazeres.map((afazer, index) => (
      <TableRow key={index}>
        <TableRowColumn style={style.checkbox}>
          <Checkbox/>
        </TableRowColumn>
        <TableRowColumn>{afazer}</TableRowColumn>
      </TableRow>
    ))
  )

  render() {
    const style = {
      table: {
        width: '60%',
        marginLeft: '20%'
      },
      checkbox: {width: '20%'}
    }
    return (
      <Table 
        style={style.table}
      >
        <TableBody displayRowCheckbox={false}>
          {this.renderAfazeres(style)}
        </TableBody>
      </Table>
    )
  }
}

export default TodoList
