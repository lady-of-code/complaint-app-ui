import React from "react";
import complaintService from './../../../services/complaints.service';
import withParams from "../../../helper/withParams";

class EditComplaint extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onFormType = this.onFormType.bind(this)
        let { id } = this.props.params;
        this.state = { id: id, name: "", email: "", complaint_desc: "" }
    }

    async componentDidMount() {
        let { id } = this.state;
        let data = await complaintService.fetchComplaint(id);
        this.setState(data.data[0]);
    }

    onFormSubmit(event) {
        event.preventDefault()
        let form = this.state;
        console.log(form);
        complaintService.editComplaint(form,form.id);
        this.addComplaintForm.reset();
    }

    onFormType(event) {
        let form = this.state;
        form[event.target.name] = event.target.value;
        this.setState(form);
    }

    render() {
        let { id, name, email, complaint_desc } = this.state;
        let {title}=this.props;
        return (
            <React.Fragment><div>
                <h1>{title}</h1>
            </div><div>

                </div><div>
                    <form ref={(el) => this.addComplaintForm = el} onSubmit={this.onFormSubmit}>
                        <input type="hidden" name="id" value={id} />
                        <div className="mb-3">
                            <label forhtml="exampleInputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" name="name" value={name} onChange={this.onFormType} />
                        </div>
                        <div className="mb-3">
                            <label forhtml="exampleInputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail" name="email" value={email} onChange={this.onFormType} />
                        </div>
                        <div className="mb-3">
                            <label forhtml="exampleInputPassword1" className="form-label">Complaints</label>
                            <textarea className="form-control" id="exampleInputPassword1" rows="5" name="complaint_desc" value={complaint_desc} onChange={this.onFormType} />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form></div></React.Fragment>
        )
    }
}

export default withParams(EditComplaint);