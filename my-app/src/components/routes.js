import * as React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import ListPage from "../pages/complaints/list";
import Add from "./complaints/add";
  
class MainRoute extends React.Component{
    render(){
        return (<div>
                	<Routes>
                        <Route path="/add" element={<Add name="Add Complaints"/>}/>
                        <Route path="/" element={<ListPage />}/>
                    </Routes>
                </div>)
    }
}

export default MainRoute;