import * as React from "react"
// import {useNavigate } from "react-router-dom"
class Add extends React.Component {
    // navigate;
    constructor(props) {
        super(props)
        console.log("heyaaa good morning", this.props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onFormType = this.onFormType.bind(this)
        this.state = { name: "", email: "", complaint: "", date: "" }
        // this.navigate= useNavigate();

    }
    saveDate() {

        let date = new Date();
        let month = date.getMonth() + 1;
        return (date.getDate() + "/" + month + "/" + date.getFullYear());
    }
    // this is a method 
    onFormSubmit(event) {
        //    event.preventDefault();

        event.preventDefault()
        let form = this.state;
        form.date = this.saveDate();
        console.log("submitted data =", form);
        this.saveItem(form);
        this.addComplaintForm.reset();
    }
    onFormType(event) {
        //  console.log(event.target.name);
        //  console.log(event.target.value);
        let form = this.state;
        form[event.target.name] = event.target.value;
        this.setState(form);
        // this.state=form;


    }
    saveItem(data) {
        // const navigate = useNavigate();
        let storage = localStorage.getItem("complaint");

        if (storage == null) {
            storage = [];
        }
        else {
            storage = JSON.parse(storage);
        }
        storage.push(data);

        localStorage.setItem("complaint", JSON.stringify(storage))
        // this.navigate("/")
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
                            <textarea className="form-control" id="exampleInputPassword1" rows="5" name="complaint" onKeyUp={this.onFormType} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form></div></React.Fragment>





        )
    }
}
export default Add;