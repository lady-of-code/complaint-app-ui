//First Rule of Programming is Don't ever Repeat Yourself
const complaintService = {
    apiUrl:"http://localhost:4000/api",
    list:()=>{
        let complaints = localStorage.getItem("complaints");
        
        if (complaints == null) { 
            complaints = []; 
        }
        else { 
            complaints = JSON.parse(complaints); 
        }
        return complaints
    },
    add:(complaint)=>{
        let complaints = complaintService.list();
        complaints.push(complaint);
        localStorage.setItem("complaints", JSON.stringify(complaints))
    },
    deleteAll:()=>{
        localStorage.removeItem("complaints");
    },
    fetchListAPI:async ()=>{
        try{
            let response = await fetch(complaintService.apiUrl+"/complaints");
            response = await response.json();
            return response;
        }catch(e){
            console.log("error is :",e);
        }
        
    },
    addComplaint:async (complaint)=>{
        console.log(complaint);
        const res = await fetch(`${complaintService.apiUrl}/complaints`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(complaint),
          });
    
          if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }
    
          const data = await res.json();
          return data;
    }

};

export default complaintService;