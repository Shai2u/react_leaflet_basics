import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create"
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function TodoForm({addTodo}){
    const [text, setText]= useState("");
    const handleChnage = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('in');
        addTodo(text);
        setText("");
    }
    return(
        
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic"
                label="Add to do"
                variant="outlined"
                onChange={handleChnage} 
                value={text} InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="create todo" edge="end" type="submit">
                        <Create />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}/>
            </form>
        
        </ListItem>
    )
}