import { Navigate } from "react-router-dom";
import React from "react";
import complaintService from "../../../services/complaints.service";
import Card from "../../../ui-components/card";
import withParams from "../../../helper/withParams";

class ViewComplaint extends React.Component {
    constructor(props) {
        super(props);

        let { id } = this.props.params;
        this.state = { id: id, data: {}, label: " " }
        this.deleteComplaint= this.deleteComplaint.bind(this)
    }

    async componentDidMount() {
        let { id } = this.state;
        let data = await complaintService.fetchComplaint(id);
        this.setState({ data: data.data[0] })
    }
   
   async deleteComplaint(event){
        
        let { id } = this.state;
        let response= await complaintService.deleteComplaint(id);
        console.log(response);
        this.setState({id:0});
      }
    

    render() {
        let { data, label,id } = this.state;
        if(id!=0){
            
        return (<React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col pt-3">
                        <h3>{label}</h3>
                        <button className="btn btn-outine-danger float-end" type="button" onClick={this.deleteComplaint}>Delete</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-12 p-2">
                        <Card title={data.name + ' - ' + data.email} subtitle={data.created_at} text={data.complaint_desc} />
                    </div>
                </div>
            </div>
        </React.Fragment>)
        }
        else{
            return (<React.Fragment>
                <Navigate to={"/list"}/>

            
            </React.Fragment>)
        }
    }
}

export default withParams(ViewComplaint);