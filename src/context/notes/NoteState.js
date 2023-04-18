import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
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

        const note = await response.json();
        setNotes(notes.concat(note));
    };

    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNTlmMGU1YTA2NTZjYzE4ZGYyYWQyIn0sImlhdCI6MTY4MDE5Nzk1OX0.RCfwIy_uzOm0_wGbUY9DtFxyaWFymgL49YVdc8GSMt4",
            }
        });
        const json = await response.json();
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNTlmMGU1YTA2NTZjYzE4ZGYyYWQyIn0sImlhdCI6MTY4MDE5Nzk1OX0.RCfwIy_uzOm0_wGbUY9DtFxyaWFymgL49YVdc8GSMt4",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();

        //to Update a front end
        getNotes();

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes.title = title;
                newNotes.description = description;
                newNotes.tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
