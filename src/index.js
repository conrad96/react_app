import React from 'react'
import ReactDOM from 'react-dom'
import JSON from './db.json';

//Add components here 
import Header from './components/header'
import NewsList from './components/news_list';

const App = () => {  

  return (
    <div className="header">
      <Header />
      <NewsList />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));