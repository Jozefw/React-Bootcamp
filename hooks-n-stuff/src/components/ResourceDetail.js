import React from 'react';
import useResources from './useResources';



const ResourceDetail =({resourceProp})=> {
    const newResources = useResources(resourceProp);
  
        return(
        <ul>
            {newResources.map(function(item){
                return(<li key={item.id}>{item.title}</li>)
            })}
        </ul>
        )
}
export default ResourceDetail;