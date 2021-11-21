import api from "../api/api";
import authHeader from "../helpers/auth-header";

function addNote(note) {
    api.addNote(note, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: note
    }).then(response => response).then(note => {
        return note;
    }).catch(error => {
        return error;
    });
}

function deleteNoteByID(id) {
    api.deleteNoteById(id, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        params: id
    }).then(response => response).then(res => {
        return res;
    }).catch(error => {
        return error;
    });
}

async function getNotes(userID) {
    let notes = '';
    await api.getNotes(userID, {
        method: 'GET',
        headers: authHeader(),
    }).then(res => {
        notes = res.data.data;
    }).catch(error => {
            return error;
        });

    return notes;
}

export const noteService = {
    addNote,
    deleteNoteByID,
    getNotes,
}