import React, {useEffect, useState} from "react";
import Note from "../Note";
import Loader from "react-loader-spinner";
import CreateArea from "../CreateArea";
import {authService} from "../../services/auth";
import {Link} from "react-router-dom";
import {noteService} from "../../services/note";

function HomePage(){
    const currentUser = authService.currentUserValue;

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (currentUser){
            noteService.getNotes(currentUser._id).then(notesDB=>{
                setNotes(notesDB);
                setIsLoading(false);
            })
        }
    });

    function addNote(note){
        noteService.addNote(note);
    }

    function deleteNote(id){
        noteService.deleteNoteByID(id);
    }

    function noteItem(noteEntry) {
        return (
            <Note
                key={noteEntry._id}
                id={noteEntry._id}
                title={noteEntry.title}
                content={noteEntry.content}
                onDelete={deleteNote}
            />
        );
    }

    function body(){
        if (currentUser){
            return (
                <div>
                    <div>
                        <CreateArea onAdd={addNote}/>
                        {notes && notes.map(noteItem)}
                    </div>
                </div>
            )
        }

        return (
            <p className={'center'}>Not eklemek için <Link to={'/register'}>kayıt</Link> olmalı veya üyeliğin varsa <Link to={'/login'}>giriş</Link> yapmalısın!</p>
        )
    }

    function loading(){
        if (isLoading && currentUser){
            return <Loader className = "center" type="Oval" color = "#f5ba13"/>;
        }else {
            return body()
        }
    }
    return(
        loading()
    );
}

export default HomePage;