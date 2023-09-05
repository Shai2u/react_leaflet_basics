import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import CoordinateItem from './CoordinateItem';
import CoordinateForm from './CoordinateForm';
import { Box,Typography } from '@mui/material';


const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data) return [];
    return data;
}


export default function CoordinatesList() {
    const [todos, setTodos] = useState(getInitialData)
    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id === id)
                {
                    return {...todo, completed: !todo.completed};
                }
                else {
                    return todo;
                }
            })
        })
    }
    const addTodo = (lng, lat) => {
        setTodos(prevTodos => {
            return [...prevTodos, {lng: lng, lat:lat, id:crypto.randomUUID(), completed: false}]
        })
    }
    return (
       
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                m: 3,
            }}
        >
            <Typography variant="h3" component="h1" sx={{ flexGrow: 5 }}>
                Coordinates
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <CoordinateItem
                        todo={todo}
                        key={todo.id}
                        remove={removeTodo}
                        toggle={() => toggleTodo(todo.id)} />
                ))}
                <CoordinateForm addTodo={addTodo} />
            </List>
        </Box>
        

    )

}
