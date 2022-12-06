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
            let response;
            await fetch(complaintService.apiUrl+"/complaints")
            .then(res => res.json())
            .then((res)=>{
                response = res;
            })
            return response;
        }catch(e){
            console.log("error is :",e);
        }
        
    }
};

export default complaintService;