import List from './components/complaints/list/index'
import './App.css';
import Add from './components/complaints/add';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


class App extends React.Component
 {
  constructor(props){
    super(props)
   this.state={data:[{
    name:"deepak",
    date:"12-24-2000",
    complaint:"this is some random complaint"
   }, 
   {
    name:"sakshi",
    date:"12-24-2000",
    complaint:"this is some random complaint"
   },
   {
    name:"nishant",
    date:"12-24-2000",
    complaint:"this is some random complaint"
   },
   {
    name:"shreya",
    date:"12-24-2000",
    complaint:"this is some random complaint"
   }]
  }
}
  render()
  {
    let {data}=this.state;
  return (
    <div><div className="main-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
      {data.map(
        (d,i)=>{
          {/* console.log(d,i); */}
          return(
          <React.Fragment>
          <List name ={d.name} date= {d.date} complaint={d.complaint}/>
          </React.Fragment>
        )}
      )}
        {/* <List name ="deepak " date="14-12-23000" complaint="this is a random complaint"/>
        <List name ="sakshi " date="14-12-23000" complaint="this is a random complaint"/>
        <List name ="ansh " date="14-12-23000" complaint="this is a random complaint"/>
        <List name ="shruti " date="14-12-23000" complaint="this is a random complaint"/> */}
         {/* <Add name="add complaints"/>
         <Add name="Edit Complaints"/> */}

        {/* {this.props.children} */}
      </div>
    </div>
    </div>

  );
}
 }

export default App;

