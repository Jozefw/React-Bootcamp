import {useState,useEffect} from 'react';
import axios from 'axios';


const useResources = (resourceProp) => {
    const [resource,setResource] = useState([]);

    const fetchResource = async (resourceProp)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceProp}`);
       setResource(response.data)
        
    }

    useEffect(()=>{
        fetchResource(resourceProp);
    },[resourceProp]);

    return resource;
}
export default useResources;
