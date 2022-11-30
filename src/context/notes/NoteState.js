import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const host = "http://localhost:5000/";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);


    // Get all notes
    
    const getNotes = async()=>{

      // API Call

      const response = await fetch(`${host}api/notes/fetchallnotes`, {

        method: 'GET', 
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MThkZjJjZWE1YTcxMzAyZmNkNDk3In0sImlhdCI6MTY2OTQzNDg2Nn0.O4QJ3JEa9CqVICHBdmPRxEAJK5giX4_kSvTr0QyxyRc'
          
        },
        
      });

      const json = await response.json();
      console.log(json)
      setNotes(json)

    }

    // Add a note
    
    const addNote = async(title, description, tag)=>{

      // API Call

      const response = await fetch(`${host}api/notes/addnote`, {

        method: 'POST', 
        
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MThkZjJjZWE1YTcxMzAyZmNkNDk3In0sImlhdCI6MTY2OTQzNDg2Nn0.O4QJ3JEa9CqVICHBdmPRxEAJK5giX4_kSvTr0QyxyRc'
        },
        
        body: JSON.stringify({title, description, tag}) 
      });
    

      console.log("Adding a note");
      
      const note = {
        "user": "63818df2cea5a71302fcd497",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-11-27T05:35:54.623Z",
        "__v": 0
      };

       setNotes(notes.concat(note))

    }


    // Delete a note

    const deleteNote=async(id)=>{

      // API Call

      const response = await fetch(`${host}api/notes/deletenote/${id}`, {

        method: 'DELETE', 
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MThkZjJjZWE1YTcxMzAyZmNkNDk3In0sImlhdCI6MTY2OTQzNDg2Nn0.O4QJ3JEa9CqVICHBdmPRxEAJK5giX4_kSvTr0QyxyRc'
          
        },
         
      });
    
      const json = response.json();
      console.log(json)

      console.log("Deleting a note "+ id);
      const newNote = notes.filter((note)=>{return note._id!==id})
      setNotes(newNote)

    }


    // Edit a note

    const editNote = async(id, title, description , tag)=>{

      // API Call

      const response = await fetch(`${host}api/notes/updatenote/${id}`, {

        method: 'POST', 
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MThkZjJjZWE1YTcxMzAyZmNkNDk3In0sImlhdCI6MTY2OTQzNDg2Nn0.O4QJ3JEa9CqVICHBdmPRxEAJK5giX4_kSvTr0QyxyRc'
          
        },
        
        body: JSON.stringify({title, description, tag}) 
      });
    
      const json = response.json();

      // logic to edit in client 


      for(let index=0; index<notes.length; index++){

        const element = notes[index];

        if(element._id===id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }

      }

    }



    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
