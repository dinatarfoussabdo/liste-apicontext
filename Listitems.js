import React,{useState} from 'react'

export default function Listitems({todo,id,checkComplete,handleedittodos}) {
const[onedit,setonedit]=useState(false)
const[editvalue,seteditvalue]=useState(todo.name);
  const handleonedit =()=>{
setonedit(true)

  }
  const handlesave=id=>{
    setonedit(false)
      if(editvalue){
        handleedittodos(editvalue,id)
      }else{
        seteditvalue(todo.name)
      }
  }
  if(onedit){
    return (
      <li>
      
        <input type="text" name="editvalue" id="editvalue" value={editvalue} 
        onChange={e=>seteditvalue(e.target.value.toLowerCase())}
       />
      
      
     
      <button onClick={()=>handlesave(id)}>Save</button>
  </li>
    )

  }else{
    return (
      <li>
      <label htmlFor={id} className={todo.complete ? "active" : ""}>
         <input type="checkbox" name="" id={id} checked={todo.complete}
        onChange={() =>checkComplete(id)}/>
        {todo.name}
      
      </label>
      <button  disabled={todo.complete} onClick={handleonedit}>Edit</button>
  </li>
    )

  }
 
}
