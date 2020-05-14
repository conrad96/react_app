import React from 'react'
import ReactDOM from 'react-dom'
import JSON from './db.json';

//Add components here 
import Header from './components/header'
import NewsList from './components/news_list';

const App = () => {  

  state = {
    news: JSON 
  }

  return (
    <div className="header">
      <Header />
      <NewsList news={this.state.news}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));