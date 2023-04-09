import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6427c8b7163c4cdda50eb1c6",
            "user": "64259f0e5a0656cc18df2ad2",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-01T06:01:27.501Z",
            "__v": 0
        },
        {
            "_id": "642f087b7b5af1256752e9f0",
            "user": "64259f0e5a0656cc18df2ad2",
            "title": "New blog",
            "description": "Please write your blogs",
            "tag": "Inastagram",
            "date": "2023-04-06T17:59:23.888Z",
            "__v": 0
        },
        {
            "_id": "642f089d7b5af1256752e9f2",
            "user": "64259f0e5a0656cc18df2ad2",
            "title": "New music",
            "description": "Please play new song",
            "tag": "YouTube",
            "date": "2023-04-06T17:59:57.107Z",
            "__v": 0
        },
        {
            "_id": "6427c8b7163c4cdda50eb1c6",
            "user": "64259f0e5a0656cc18df2ad2",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-04-01T06:01:27.501Z",
            "__v": 0
        },
        {
            "_id": "642f087b7b5af1256752e9f0",
            "user": "64259f0e5a0656cc18df2ad2",
            "title": "New blog",
            "description": "Please write your blogs",
            "tag": "Inastagram",
            "date": "2023-04-06T17:59:23.888Z",
            "__v": 0
        },
        {
            "_id": "642f089d7b5af1256752e9f2",
            "user": "64259f0e5a0656cc18df2ad2",
            "title": "New music",
            "description": "Please play new song",
            "tag": "YouTube",
            "date": "2023-04-06T17:59:57.107Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;