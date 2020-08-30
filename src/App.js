import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

const App=() =>{

  const [inputList, setInputList]=useState("");
  const [Items,setItems]=useState([]);

  const itemEvent=(e)=>{
    e.preventDefault();
    setInputList(e.target.value);
  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
    setInputList('')
  }

  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id
      });
    });
}

const editItems=(e)=>{
return e.target.value

}

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Items" 
        value={inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}>Add</button>
        <ol>
          {/*<li>{inputList}</li>*/}
          {Items.map((itemval,index)=>{
            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} edit={editItems}/>;
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App

