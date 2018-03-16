import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class TodosIndex extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: this.props.todos
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Todos Data</h2>
        <BootstrapTable data={ this.state.todos }>
          <TableHeaderColumn dataField='id' isKey dataAlign="center" dataSort={true}>Todo ID</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataAlign="center" dataSort={true}>Todo title</TableHeaderColumn>
          <TableHeaderColumn dataField='time' dataAlign="center" dataSort={true}>todo time</TableHeaderColumn>
        </BootstrapTable>
        <a href = '/todos/new'> New Todo </a>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('todos_data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <TodosIndex todos={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})