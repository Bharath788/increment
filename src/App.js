import React, { useState } from 'react';
import ListItems from './ListItems';

const App = () => {

    const [inputList,setInputList] = useState("");
    const [items,setItems] = useState([]);

   const itemEvent = (event) =>{
       setInputList(event.target.value);
   }
   const listOfItems =() =>{
        setItems((oldItems) => {
          return[...items ,inputList];
        });
        setInputList("");
   }

   const deleteItems = ( id ) => {
   //     console.log("deleted");
      setItems((oldItems) => {
        return oldItems.filter((arrele, index) =>{
          return index != id;
        })
      })
 }
     
  return(  <>

     <div className="main_div">
        <div className="center_div">
          <br />
            <h1>Shopping Cart</h1>
            <br></br>
            <input type="text" placeholder="Add items" onChange={itemEvent} value={inputList}/>
            <button onClick={listOfItems}> + </button>

            <ol>
              {/* <li>{inputList}</li> */}
                { items.map((val , index) =>{
                   return <ListItems text={val} key={index} id={index} onSelect={deleteItems}/>
                 })}
            </ol>
        </div>

     </div>
     
    </>
  )
}

export default App;