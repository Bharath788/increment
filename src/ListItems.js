import React from "react";

const ListItems = (man) =>{
    
   

    return (
    <> 
    <div className="item_style">
     <i className="iclass" onClick={() =>{
         man.onSelect(man.id);
     }}>x</i>
    <li>{man.text}</li>; 


    </div>
    
  </>);
} 

export default ListItems;