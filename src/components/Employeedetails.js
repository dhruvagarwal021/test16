import Axios from "axios";
import { useEffect, useState } from "react";
function Employeedetails()
{
    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                //console.log(res.data);
                setData(res.data);
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);//useEffect is used so that function component can have a life cycle.

    const ListNames=()=>
    {
        return data.map((val)=>{
            return <p>{val.name}</p>
        })
    }
    return(
        <div>
            {ListNames()}
        </div>
    );
}

export default Employeedetails;