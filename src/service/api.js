import axios from "axios";
const URL = 'http://localhost:8000' // Back-end URL

export const VarName = async (data) =>{
    try{
        return await axios.post(`${URL}/endPoint`, data); 
    }catch(error){
        console.log("Error While Connecting API", error);
    }
}