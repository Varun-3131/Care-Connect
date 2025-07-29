import {createContext, useEffect, useState} from "react";
import {doctors} from "../assets/assets.js";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = ' ₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token"): false);

    const getDoctorsData=async ()=>{

        try{
            const {data}=await  axios.get(backendUrl + '/api/doctor/list');
            if(data.success){
                setDoctors(data.doctors);
            }else{

            }
        }
        catch(err){
            console.log(err);

        }
    }

    const value = {
        doctors, currencySymbol,setToken,backendUrl
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider;