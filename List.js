import React,{useContext} from 'react'
import Listitems from './Listitems'
import {Datacontext} from './Dataprovider'

export default function List() {
  const [todos,settodos]=useContext(Datacontext);

  const switchComplete=id=>{
    const newtodos = [...todos]
    newtodos.forEach((todo,index)=>
    {
      if(index === id){
        todo.complete = !todo.complete
      }

    })
        settodos(newtodos)
  }
  const handleedittodos = (editvalue,id)=>{
    const newtodos =[...todos]
    newtodos.forEach((todo,index)=>{
      if(index===id){
        todo.name = editvalue
      }
    })
settodos(newtodos)
  }
  
  return (
    <ul>
     {
      todos.map((todo,index)=>(
        <Listitems todo={todo} key={index} id={index}
       
       checkComplete={switchComplete}handleedittodos={handleedittodos}/>
      ))
     }
{/* <li>
<label htmlFor="" className='active
'>
  <input type="checkbox" name="" id="" />Coking To Do

</label>
<button>Edit</button>
</li> */}

  
   </ul>
  )
}
