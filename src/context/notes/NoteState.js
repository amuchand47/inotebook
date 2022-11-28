import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const s1 = {
        "name" : "Chand",
        "class" : "B.Tech"
    }

    const [state, setState] = useState(s1);

    const update = ()=>{

        setTimeout( ()=>{

            setState(
             {
                "name" : "Md Chand Alam",
                "class" : "M.Tech"
             }

            )
        }, 3000

        )
    }

    return (
        <NoteContext.Provider value = {{state:state, update: update}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
