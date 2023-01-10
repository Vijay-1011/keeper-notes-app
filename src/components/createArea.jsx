import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){

    const[isExpanded,setExpanded]=useState(false)

    const[note,setnote]=useState({
        title:"",
        content:""
    })
    function handlechange(event){
        const{name,value}=event.target;
        setnote((prevNote)=>{
            return {
            ...prevNote,
            [name]:value
            }
        })

    }
    function submitNote(event){

        props.onAdd(note)
        setnote({
            title:"",
        content:""
        })
        event.preventDefault();

    }
    function expand(){
        setExpanded(true)
    }


    return <div>
    <form className="create-note">

       {isExpanded &&  <input 
        placeholder="Title" 
        name="title" 
        value={note.title} 
        onChange={handlechange}/>}

        <textarea 
        name="content" 
        placeholder="Take a note" 
        value={note.content}  
        onChange={handlechange}
        onClick={expand}
        rows={isExpanded ? 3:1}
        />

        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>

    </form>

    </div>
}


export default CreateArea;