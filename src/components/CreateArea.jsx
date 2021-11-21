import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import {authService} from "../services/auth";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
        user: authService.currentUserValue,
    });

    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function submitNote() {
        props.onAdd(note);
        setIsExpanded(false);
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Başlık"
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Bir not yaz..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={expand}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
