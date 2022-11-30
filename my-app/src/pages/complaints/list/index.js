import React from "react";
import List from "./../../../components/complaints/list";

class ListPage extends React.Component
{
    constructor(props){
        super(props);

        this.state={data:[{
            name:"deepak",
            date:"12-24-2000",
            complaint:"this is some random complaint"
           }, 
           {
            name:"sakshi",
            date:"12-24-2000",
            complaint:"this is some random complaint"
           },
           {
            name:"nishant",
            date:"12-24-2000",
            complaint:"this is some random complaint"
           },
           {
            name:"shreya",
            date:"12-24-2000",
            complaint:"this is some random complaint"
           }]
          }
    }
    render(){
        let {data}=this.state;
        return(<React.Fragment>
            {data.map(
                (d,i)=>{
                    return(
                    <React.Fragment>
                        <List name ={d.name} date= {d.date} complaint={d.complaint}/>
                    </React.Fragment>)
                }
            )}
        </React.Fragment>)
    }
}

export default ListPage;