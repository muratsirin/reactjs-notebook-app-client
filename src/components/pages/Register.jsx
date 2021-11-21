import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import FormGroup from "../FormGroup";
import FormCard from "../FormCard";
import {authService} from "../../services/auth";

function Register() {
    const [user, setUser] = useState({
        name:'',
        lasName:'',
        email: '',
        password: '',
    });

    function handleChange(event){
        const {name, value} = event.target;

        setUser((prevData)=>{
            return {
                ...prevData,
            [name]: value,
            };
        });
    }

    function register(event){
        authService.register(user);
        event.preventDefault();
    }

    function cardBody() {
        return (
            <Form>
                <FormGroup label={"Ad"} type={"text"} name={'name'} value={user.name} onChange={handleChange} placeholder={"Adınız"}/>
                <FormGroup label={"Soyad"} type={"text"} name={'lastName'} value={user.lastName} onChange={handleChange} placeholder={"Soyadınız"}/>
                <FormGroup label={"Email"} type={"email"} name={'email'} value={user.email} onChange={handleChange} placeholder={"Email Adresiniz"}/>
                <FormGroup label={"Parola"} type={"password"} name={'password'} onChange={handleChange} value={user.password} placeholder={"Parolanız"}/>
                <Button onClick={register} className="w-100 text-light" variant="warning" type="submit">
                    Kayıt Ol
                </Button>
            </Form>
        );
    }

    return (
        <FormCard cardTitle={"Kayıt Ol"} cardBody={cardBody()}/>
    )
}

export default Register;