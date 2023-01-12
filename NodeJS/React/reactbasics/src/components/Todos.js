import React,{useState, useEffect} from "react";

const Todos=()=>{
    const [todos, setTodos] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
    //   .then(json => console.log(json))
        .then(json => setTodos(json))
    },[])

    
    return (
        <div>
            <h1>Total Todos : {todos.length}</h1>
            <table>
            <tr>
            <th>UserId</th>
            <th>ID</th>
            <th>Title</th>
            <th>completed</th>       
            </tr>
                {todos.map((todo)=>
                    <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default Todos