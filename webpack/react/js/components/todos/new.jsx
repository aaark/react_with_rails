import React from 'react'
import ReactDOM from 'react-dom'

class TodoNew extends React.Component {

  render () {
    return (
      <form action = '/todos' method= 'post' name='todo' id = 'todo'>
        <input name='todo[title]' type='text'/>
        <br/>
        <input name='todo[time]' type='number'/>
        <br/>
        <input type='submit'/>
      </form>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {

   ReactDOM.render(
    <TodoNew />,
    document.getElementById('react_root'),
  )
})