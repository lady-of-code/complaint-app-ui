import React from "react";
import complaintService from "../../../services/complaints.service";
import Card from "../../../ui-components/card";
import withParams from "../../../helper/withParams";

class ViewComplaint extends React.Component {
    constructor(props) {
        super(props);

        let { id } = this.props.params;
        this.state = { id: id, data: {}, label: " " }
    }

    async componentDidMount() {
        let { id } = this.state;
        let data = await complaintService.fetchComplaint(id);
        this.setState({ data: data.data[0] })
    }


    render() {
        let { data, label } = this.state;
        return (<React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col pt-3">
                        <h3>{label}</h3>
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
}

export default withParams(ViewComplaint);