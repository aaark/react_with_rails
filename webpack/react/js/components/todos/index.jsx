import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Request from 'superagent';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class TodosIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
    console.log(this.state);
  }

  componentWillMount () {
    var url = '/todos.json';
    let currentComponent = this;
    Request.get(url).then((response) => {
      currentComponent.setState({todos: response.body})
    });
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
        <li><NavLink to="/todos/new">New</NavLink></li>
      </div>
    );
  }
}


export default TodosIndex;