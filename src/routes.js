import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AddComplaint from "./pages/complaints/add";
import EditComplaint from "./pages/complaints/edit";
import ListComplaint from "./pages/complaints/list";

import DashboardView from "./pages/dashboard/view";
  
class MainRoute extends React.Component{
    render(){
        return (<div>
                	<Routes>
                        <Route path="/add" element={<AddComplaint name="Add Complaints"/>}/>
                        <Route path="/edit/:id" element={<EditComplaint title="Edit Complaints"/>}/>
                        <Route path="/list" element={<ListComplaint />}/>
                        <Route path="/" element={<DashboardView />}/>
                    </Routes>
                </div>)
    }
}

export default MainRoute;