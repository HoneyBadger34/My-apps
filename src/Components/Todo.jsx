import { BsPlusLg } from 'react-icons/bs'
import {VscTrash} from 'react-icons/vsc'


import React from 'react'
import { useState } from 'react'

const Todo = () => {
  
  const [input, setInput] = useState('');
  const inputHandle = (e) => {
    setInput(e.target.value);
  }

  const [todos, setTodos] = useState([])

 

  const clickHandle = () => {
    if (input === '') {
      alert('What will you do?')} 
    else if (todos.find(todo => todo.name === input )) 
    {
      alert('You have already decleraded this.')} 
    else {
      const newTodo = {
        name: input,
        done: false
      }
      setTodos([...todos, newTodo])
      setInput('')
    }
    
  }

  const removeTodo = (todoKey) => {
    setTodos(todos.filter((todo , key ) => key !== todoKey));
  }

  const toggleTodo = (todoKey) => {
    setTodos(
      todos.map(( todo , key )=> {
        if (key === todoKey) {
          todo.done = !todo.done
        }
        return todo;
      }) 
    )
  }


  return (
    <div className='flex flex-col break-all'>
      
    <div className='flex justify-center  items-center gap-2'>
    <form onSubmit={ (e) => e.preventDefault() }>
      <input 
      type='text'
      value={input} 
      onChange={inputHandle} 
      placeholder="What's next?" />
    </form>
    <button onClick={clickHandle} className='bg-red-600 p-2 rounded-full'><BsPlusLg className='text-white' /></button>
    </div>

    <div>
      <ul className='items-center'>
        {todos.map((todo, key) => (
          <li className='m-2 flex justify-center items-center text-center'>
            <span className={todo.done ? 'done cursor-pointer p-[2px] px-3 bg-aLightGray rounded' : 'cursor-pointer p-[2px] px-3 bg-aLightGray rounded'}   key={key} onClick={ () => toggleTodo(key) }> {todo.name} </span>
           
          <button className='self-center ml-2' onClick={ () => removeTodo(key) }><VscTrash /></button> 
          
          
          </li>
        ))}
      </ul>
    </div>
    
    

    </div>
  )
}

export default Todo