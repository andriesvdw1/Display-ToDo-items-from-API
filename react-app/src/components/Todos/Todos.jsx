import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setTodos(data);
        }
        fetchData();
    }, []);

    
    const todosTitles =  todos.map((item) => item.id +" "+ item.title)
    
    return <div>{todosTitles.map(title => (
        <p>{title}</p>
    ))}</div>;
}

export default Todos;