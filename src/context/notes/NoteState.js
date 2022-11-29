import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "6381c0f3b3ad46e851fe44dd",
          "user": "63818df2cea5a71302fcd497",
          "title": "My title",
          "description": "My description hai ye",
          "tag": "News Mine",
          "date": "2022-11-26T07:32:03.504Z",
          "__v": 0
        },
        {
          "_id": "6381c22acff0baa8d1140802",
          "user": "63818df2cea5a71302fcd497",
          "title": "My title 3",
          "description": "My description nahi hai",
          "tag": "Personal hai ye",
          "date": "2022-11-26T07:37:14.928Z",
          "__v": 0
        },
        {
          "_id": "6382f73a65bb6970d2e7857d",
          "user": "63818df2cea5a71302fcd497",
          "title": "My title 3",
          "description": "My description nahi hai",
          "tag": "Personal hai ye",
          "date": "2022-11-27T05:35:54.623Z",
          "__v": 0
        },
        {
            "_id": "6382f73a65bb6970d2e7857e",
            "user": "63818df2cea5a71302fcd497",
            "title": "My title 3",
            "description": "My description nahi hai",
            "tag": "Personal hai ye",
            "date": "2022-11-27T05:35:54.623Z",
            "__v": 0
          },
          {
            "_id": "6382f73a65bb6970d2e7857f",
            "user": "63818df2cea5a71302fcd497",
            "title": "My title 3",
            "description": "My description nahi hai",
            "tag": "Personal hai ye",
            "date": "2022-11-27T05:35:54.623Z",
            "__v": 0
          }
    ];

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
