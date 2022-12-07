import * as React from "react"
import complaintService from './../../../services/complaints.service';

class AddComplaint extends React.Component {
    constructor(props) {
        super(props)
        // console.log("heyaaa good morning", this.props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onFormType = this.onFormType.bind(this)
        this.state = { name: "", email: "", complaint_desc: ""}
    }
   
    onFormSubmit(event) {
        event.preventDefault()
        let form = this.state;
        
        complaintService.addComplaint(form);
        this.addComplaintForm.reset();
    }

    onFormType(event) {
        let form = this.state;
        form[event.target.name] = event.target.value;
        this.setState(form);
    }

    render() {
        let {
            name
        } = this.props;
        return (
            <React.Fragment><div>
                <h1>{name}</h1>
            </div><div>

                </div><div>
                    <form ref={(el) => this.addComplaintForm = el} onSubmit={this.onFormSubmit}>

                        <div className="mb-3">
                            <label forhtml="exampleInputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" name="name" onKeyUp={this.onFormType} />
                        </div>
                        <div className="mb-3">
                            <label forhtml="exampleInputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail" name="email" onKeyUp={this.onFormType} />
                        </div>
                        <div className="mb-3">
                            <label forhtml="exampleInputPassword1" className="form-label">Complaints</label>
                            <textarea className="form-control" id="exampleInputPassword1" rows="5" name="complaint_desc" onKeyUp={this.onFormType} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form></div></React.Fragment>
        )
    }
}
export default AddComplaint;