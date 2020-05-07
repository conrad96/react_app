import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return React.createElement('h1', {className: 'example'}, 'Hello Conrad');
}

ReactDOM.render(<App/>, document.querySelector('#root'));