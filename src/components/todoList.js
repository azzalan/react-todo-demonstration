import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox';

// TESTAR
// render()

// PROPS
// afazeres: []
class TodoList extends Component {
  render() {
    // const style = {
    //   table: {
    //     width: '60%',
    //     marginLeft: '20%'
    //   },
    //   checkbox: {width: '20%'}
    // }
    return (null
      /*<Table 
        style={style.table}
      >
        <TableBody displayRowCheckbox={false}>
          {this.props.afazeres.map((afazer, index) => (
            <TableRow key={index}>
              <TableRowColumn style={style.checkbox}>
                <Checkbox/>
              </TableRowColumn>
              <TableRowColumn>{afazer}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>*/
    )
  }
}

export default TodoList
