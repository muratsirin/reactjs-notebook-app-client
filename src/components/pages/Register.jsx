import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import FormGroup from "../FormGroup";
import FormCard from "../FormCard";
import {authService} from "../../services/auth";
import {validateForm} from "../../helpers/form-validation";

function Register() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setErrors((prevValue) => {
            return {
                ...prevValue,
                [name]: validateForm(name, value)
            }
        });

        setUser((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function register(event) {
        const validationErrors = {};

        Object.keys(user).forEach(name => {
            const error = validateForm(name, user[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            authService.register(user);
        }

        console.log(errors)
        event.preventDefault();
    }

    function cardBody() {
        return (
            <Form>
                <FormGroup label={"Ad"} type={"text"} name={'firstName'} value={user.firstName} onChange={handleChange}
                           placeholder={"Adınız"} error={errors.firstName}/>
                <FormGroup label={"Soyad"} type={"text"} name={'lastName'} value={user.lastName} onChange={handleChange}
                           placeholder={"Soyadınız"} error={errors.lastName}/>
                <FormGroup label={"Email"} type={"email"} name={'email'} value={user.email} onChange={handleChange}
                           placeholder={"Email Adresiniz"} error={errors.email}/>
                <FormGroup label={"Parola"} type={"password"} name={'password'} onChange={handleChange}
                           value={user.password} placeholder={"Parolanız"} error={errors.password}/>
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