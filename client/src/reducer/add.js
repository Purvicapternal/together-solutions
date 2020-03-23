const initialstate={
    skill:"",
    client:"",
    name:"",
    email:"",
    location:"",
    experience:"",
    current:"",
    expected:"",
    notice:"",
    status1:"",
    status2:"",
    date:"",
    mobile:"",
}
export const add=(state=initialstate,action)=>{
    if(action.type==="ADD_LIST"){
        return action.payload
    }
    else return state
}
