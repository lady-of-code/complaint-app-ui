import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MainRoute from './components/routes';


class App extends React.Component
{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <Router><div className="main-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Complaints</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <MainRoute/>
      </div>
    </div>
    </Router>
  );
}
 }

export default App;

