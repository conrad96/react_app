import React from 'react'
import ReactDOM from 'react-dom'

//Add components here 
import Header from './components/header'

const App = () => {
  return (
    <div className="header">
      <Header />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));