import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NavigationBar from "./Header/Navbar";
import Login from "../components/pages/Login"
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import {authService} from "../services/auth";

function App() {
    const [auth, setAuth] = useState();

    useEffect(()=>{
        console.log(auth)
        authService.currentUser.subscribe(value => {
            setAuth(value);
        })
    }, [])

    return (
        <div>
            <Router>
                <NavigationBar isAuth={auth}/>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/login" exact element={auth  ? <Navigate to={'/'}/> : <Login/>}/>
                    <Route path="/register" exact element={auth ? <Navigate to={'/'}/> : <Register/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
