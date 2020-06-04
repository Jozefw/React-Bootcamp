import React,{useState} from 'react';
import ResourceDetail from './ResourceDetail';

const App = ()=>{
   
const [resource,setResource] = useState('posts')
 
        return(
            <div>
                <div>
                    <button onClick={()=>setResource('posts')}>POSTS</button>
                    <button onClick={()=>setResource('todos')}>TODO</button>
                </div>
                <ResourceDetail resourceProp={resource}></ResourceDetail>
            </div>
        )
}

export default App;