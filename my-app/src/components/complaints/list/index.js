import * as React from "react";

class List extends React.Component{
    render(){
        return (
            <div className="row">
            <div className="col pt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Complaint No 1</h5>
                            <h6 className="card-subtitle mb-2 text-muted">26/11/2022</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default List;
