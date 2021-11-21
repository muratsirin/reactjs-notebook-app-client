import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

const addNote = payload => api.post('/note', payload);
const deleteNoteById = id => api.delete('/note/'+id);
const getNotes = user => api.get('/notes/'+user);
const register = (payload) => api.post('register', payload);
const login = (payload) => api.post('login', payload);

const apis = {
    addNote,
    deleteNoteById,
    getNotes,
    register,
    login
}

export default apis;