import * as React from "react";

class List extends React.Component {

    render() {
        let { name, date, complaint, email } = this.props;
        return (

            <div className="col-12 pt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name} - {email}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                        <p className="card-text">{complaint}</p>
                        <a href="#" className="card-link">Card link</a>
                    </div>
                </div>
            </div>

        )
    }


}



export default List;
