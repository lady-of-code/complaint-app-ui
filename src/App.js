import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import MainRoute from './routes';
import Navbar from './ui-components/nav';


class App extends React.Component
{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <Router><div className="main-container">
      <Navbar/>
      <div className='container'>
        <MainRoute/>
      </div>
    </div>
    </Router>
  );
}
 }

export default App;

