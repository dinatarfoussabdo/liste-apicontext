import React,{useState,useContext}from 'react'
import {Datacontext} from './Dataprovider'
export default function Formirput() {
  const [todos,settodos]=useContext(Datacontext);
  const [todoName,settodoName]=useState('');
  const addtodo = e=>{
    e.preventDefault();
    settodos([...todos,{name:todoName,complete:false}])
settodoName('');
  }
  return (
    <div>
       <form autoComplete="off" onSubmit={addtodo}>
      <input type="text" name="todos" id="todos" 
        required placeholder='what needs to be done' value={todoName}
      onChange={e=>settodoName(e.target.value.toLowerCase())}/>
      <button type='submit'>create</button>
     </form>
    </div>
  )
}
