import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = () =>{
    const [todos, setTodos]=useState([
        {
          id: 1,
          title: "DEFAULT",
          status: "Not Done"
        }
    ]);

    const handleTaskCreate = (title)=>{
        const payload = {
            title: title,
            status: false,
            id: todos.length+1
        };
        setTodos([...todos, payload]);
    };
    console.log(todos);

    // delete
    const handleDelete = (id)=>{
        setTodos(todos.filter((item)=>item.id !==id));
    }

    // * toggle
    const handleToggle=(id)=>{
        const updatedTodos = todos.map((item)=>
        item.id===id ? {...item, status: !item.status}:item
        );
        setTodos(updatedTodos);
    }
    return <>
      <h1>TODO</h1>
      <TodoInput onTaskCreate={handleTaskCreate}/>
      {
        todos.map((todo)=>{
            return (
        <TodoItem 
        key={todo.id} 
        id={todo.id}
        title={todo.title} 
        status={todo.status}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        />
        );
        })
      }
    </>
}

export default Todo;