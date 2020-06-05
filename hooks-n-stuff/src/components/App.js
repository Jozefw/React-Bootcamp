import React,{useState} from 'react';
import ResourceDetail from './ResourceDetail';
import UserList from './UserList';

const App = ()=>{
   
const [resource,setResource] = useState('posts')
 
        return(
            <div>
                <div>
                    <UserList></UserList>
                    <button onClick={()=>setResource('posts')}>POSTS</button>
                    <button onClick={()=>setResource('todos')}>TODO</button>
                </div>
                <ResourceDetail resourceProp={resource}></ResourceDetail>
               
            </div>
        )
}

export default App;