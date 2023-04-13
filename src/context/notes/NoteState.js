import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    // Add a note
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNTlmMGU1YTA2NTZjYzE4ZGYyYWQyIn0sImlhdCI6MTY4MDE5Nzk1OX0.RCfwIy_uzOm0_wGbUY9DtFxyaWFymgL49YVdc8GSMt4",
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)

    };

    // Add a note
    const addNote = async (title, description, tag) => {
        // TODO : API Call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNTlmMGU1YTA2NTZjYzE4ZGYyYWQyIn0sImlhdCI6MTY4MDE5Nzk1OX0.RCfwIy_uzOm0_wGbUY9DtFxyaWFymgL49YVdc8GSMt4",
            },
            body: JSON.stringify({ title, description, tag }),
        });

        console.log("Adding a new note");
        const note = {
            _id: "642f089d7b5af12567592e9f2",
            user: "64259f0e5a0656cc18df2ad2",
            title: title,
            description: description,
            tag: tag,
            date: "2023-04-06T17:59:57.107Z",
            __v: 0,
        };
        setNotes(notes.concat(note));
    };

    // Delete a Note
    const deleteNote = async (id) => {
        // TODO : API Call
        console.log("delete the note with" + id);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNTlmMGU1YTA2NTZjYzE4ZGYyYWQyIn0sImlhdCI6MTY4MDE5Nzk1OX0.RCfwIy_uzOm0_wGbUY9DtFxyaWFymgL49YVdc8GSMt4",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
