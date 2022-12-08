import React from "react";
import { Link } from "react-router-dom";
import complaintService from "../../../services/complaints.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


class ListComplaint extends React.Component {
    constructor(props) {
        super(props);
        let storage = complaintService.list();
        this.state = { data: storage, label: "Complaint List" }
    }

    async componentDidMount() {
        let label = await complaintService.fetchListAPI()
        console.log(label.data);
        this.setState({ data: label.data })
    }

    render() {
        let { data, label } = this.state;
        return (<React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col pt-3">
                        <h3>{label}</h3>
                        <Link to={"/add"} className="btn btn-outline-primary float-end">Add new</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pt-2 ">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Complaint</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data.map(
                                        (d, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{d.id}</td>
                                                    <td>{d.name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.complaint_desc}</td>
                                                    <td>{d.created_at}</td>
                                                    <td>
                                                    <Link to={"/edit/"+d.id}><FontAwesomeIcon icon={icon({name: 'pencil', style: 'solid'})} /></Link> &nbsp;
                                                    <Link to={"/view/"+d.id}><FontAwesomeIcon icon={icon({name: 'eye', style: 'solid'})} /></Link> &nbsp;
                                                    <a href="#"><FontAwesomeIcon icon={icon({name: 'trash', style: 'solid'})} /></a> 
                                                
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>)
    }
}

export default ListComplaint;