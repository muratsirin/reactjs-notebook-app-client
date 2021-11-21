import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import FormGroup from "../FormGroup";
import FormCard from "../FormCard";
import {authService} from "../../services/auth";

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setUser((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function login(event) {
        authService.login(user)
        event.preventDefault();
    }


    function cardBody() {
        return (
            <Form>
                <FormGroup label={"Email Adresi"} type={"email"} name={'email'} value={user.email}
                           onChange={handleChange} placeholder={"Email Adresiniz"}/>
                <FormGroup label={"Parola"} type={"password"} name={'password'} value={user.password}
                           onChange={handleChange} placeholder={"Parolanız"}/>
                <Button onClick={login} className="w-100 text-light" variant="warning" type="submit">
                    Giriş Yap
                </Button>
            </Form>
        );

    }

    return (
        <FormCard cardTitle={"Giriş Yap"} cardBody={cardBody()}/>
    )
}

export default Login;
