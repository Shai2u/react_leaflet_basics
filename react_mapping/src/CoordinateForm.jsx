import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create"
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function CoordinateForm({addTodo}){
    const [lng, setLng]= useState("");
    const [lat, setLat]= useState("");

    const handleChnageLng = (evt) => {
        setLng(evt.target.value)
    }

    const handleChnageLat = (evt) => {
        setLat(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(lng, lat);
        setLng("");
        setLat("");
    }
    return(
        
        <ListItem>
            <form onSubmit={handleSubmit} style={{display: "flex"}}>
                <TextField 
                id="outlined-basic"
                label="longitude"
                variant="outlined"
                onChange={handleChnageLng} 
                value={lng} 
                style={{paddingRight: "10px"}}
                />
                <TextField 
                id="outlined-basic"
                label="latitude"
                variant="outlined"
                onChange={handleChnageLat} 
                value={lat} 
                
                />
                <IconButton aria-label="create todo" edge="end" type="submit">
                <Create />
                </IconButton>
            </form>
        
        </ListItem>
    )
}