import React from "react";
import List from "./../../../components/complaints/list";

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        let storage = localStorage.getItem("complaint");
        // console.log(JSON.stringify(storage));

        if (storage == null) { storage = []; }
        else { storage = JSON.parse(storage); }

        console.log(storage);

        this.state = { data: storage, label:" " }
        this.deleteComplaints = this.deleteComplaints.bind(this)
    }
    componentDidMount(){
        fetch("http://localhost:4000/api/complaints")
        .then(res => res.json())
        .then((res)=>{
         console.log("respons is",res);
         this.setState({label:res.data})
        })
    }
    deleteComplaints(event) {
        localStorage.removeItem("complaint");
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
                                <React.Fragment key={i}>

                                    <List name={d.name} date={d.date} email={d.email} complaint={d.complaint} />
                                </React.Fragment>)
                        }
                    )}
                </div>
            </div>
        </React.Fragment>)
    }
}

export default ListPage;