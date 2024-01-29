import { useState } from 'react'

import './App.css'

function App() {
  const [Alltodos, SetAlltodos] = useState([])
  const [Title, SetTitle] = useState('')
  const [Description, SetDescription] = useState('')
  const [Filter, setFilter] = useState('all');
  const [Status, setStatus] = useState('notcompleted'); // Default status
  function HandleClick()
  {
    console.log('HandleClick called');
    let newTodos={
      title:Title,
      description:Description
    }
    const updatedTodos=[...Alltodos]
    updatedTodos.push(newTodos)
    SetAlltodos(updatedTodos)
    console.log('Updated Todos:', updatedTodos);
  }
  function Handledeletetodo(index)
  {
    const deleteTodos=[...Alltodos]
    deleteTodos.splice(index)
    SetAlltodos(deleteTodos)
    console.log("Deletetodos",deleteTodos)
  }
  function Edittodos(index) {
    const updatedTodos = [...Alltodos];
    updatedTodos[index].status = updatedTodos[index].status === 'completed' ? 'notcompleted' : 'completed';
    SetAlltodos(updatedTodos);
  }



  return (
    <div>
      <div className='input-container'>
        <h3>My Todo</h3>
        <div className='Todo-Input'>
          <div className='Todo-Name'>
          <input type='text' value={Title} onChange={(e)=>SetTitle(e.target.value)} placeholder='Todo Name'></input>
          </div>
          <div className='Todo-Description'>
          <input type='text'value={Description} onChange={(e)=>SetDescription(e.target.value)} placeholder='Todo Description'></input>
          </div>
          <button className='Primarybtn' type="button" onClick={HandleClick}>Add Todo</button>
        </div>
        <div className='todo-container'>
         
          <h2 className='my-todos'>My Todos</h2>
          
        <label className='dropdown'>Select: 

        <select>
        <option value="all">All</option>
        <option value="notcompleted">Not Completed</option>
        <option value="completed">Completed</option>
        
        </select>
        </label>

        
        
       
        <div className='todo-list'>
          {
           Alltodos.map((item,index)=>{
            return(
              <div className='todo-store'>
                <p>Name:{item.title}</p>
                <p>Description:{item.description}</p>
                <p>Status:
                <select
                      value={item.status}
                      onChange={(e) => {
                        const updatedTodos = [...Alltodos];
                        updatedTodos[index].status = e.target.value;
                        SetAlltodos(updatedTodos);
                      }}
                    >
                    <option value="all">Not completed</option>
                    <option value="completed">completed</option>
                    </select>
                </p>
                <button className='edit-btn ' onClick={() => Edittodos(index)}>Edit</button>
                <button className='delete-btn'onClick={Handledeletetodo}>Delete</button>


              </div>
            )
           }
          )
        }
        </div>
        
        </div>
       
        
        


      </div>
      
    </div>
  )
}

export default App
