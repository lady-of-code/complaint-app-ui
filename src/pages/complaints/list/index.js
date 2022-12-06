import React from "react";
import complaintService from "../../../services/complaints.service";
import Card from "../../../ui-components/card";

class ListComplaint extends React.Component {
    constructor(props) {
        super(props);
        let storage = complaintService.list();
        this.state = { data: storage, label:" " }
        this.deleteComplaints = this.deleteComplaints.bind(this)
    }

    async componentDidMount(){
        let label = await complaintService.fetchListAPI()
         console.log(label.data);
        this.setState({data:label.data})
    }

    deleteComplaints(event) {
        complaintService.deleteAll();
        this.setState({
            data: []
        })
    }

    render() {
        let { data,label } = this.state;
        return (<React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col pt-3">
                    <h3>{label}</h3>
                        <button type="button" className="btn btn-outline-danger float-end" onClick={this.deleteComplaints}>Delete All Data</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {data.map(
                        (d, i) => {
                            return (
                                <div className="col-12 p-2" key={i}>
                                    <Card title={d.name + ' - '+ d.email} subtitle={d.created_at} text={d.complaint_desc} />
                                </div>)
                        }
                    )}
                </div>
            </div>
        </React.Fragment>)
    }
}

export default ListComplaint;