import api from "../api/api";
import {BehaviorSubject} from "rxjs";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

function register(user) {
    return api.register(user, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: user
    }).then(response => response).then(user => {
        localStorage.setItem('currentUser', JSON.stringify(user.data.user));
        currentUserSubject.next(user.data.user);
    });
}

function login(user) {
    return api.login(user, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: user
    }).then(response => response).then(user => {
        localStorage.setItem('currentUser', JSON.stringify(user.data.user));
        currentUserSubject.next(user.data.user);
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

export const authService = {
    register,
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
}
