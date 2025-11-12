import axios from "axios";
const URL = 'http://localhost:8000';  // express server url

export const addStudent = async (data) =>{
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error While calling API", error);
    }
}