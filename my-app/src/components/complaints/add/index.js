import * as React from "react"

class Add extends React.Component{
    constructor(props){
        super(props)
        console.log("heyaaa good morning", this.props)
        
    }
  
    render()
    {
        let {
            name
        }=this.props;
        return(
            <React.Fragment><div>
                <h1>{name}</h1>
            </div><div>

                </div><div>
                    <form>
                        <div className="mb-3">
                            <label forHtml="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label forHtml="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" forHtml="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form></div></React.Fragment>
 
 



        )
    }
}
export default Add;