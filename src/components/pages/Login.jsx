import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import FormGroup from "../FormGroup";
import FormCard from "../FormCard";
import {authService} from "../../services/auth";
import {validateForm} from "../../helpers/form-validation";

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        invalid: '',
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setErrors((prevValue) => {
            return {
                ...prevValue,
                [name]: validateForm(name, value),
                invalid: ''
            }
        });

        setUser((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function login(event) {
        const validationErrors = {};

        Object.keys(user).forEach(name => {
            const error = validateForm(name, user[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }else {
            authService.login(user).catch(err =>{
                if (err.response.data.message.errors){
                    setErrors({
                        invalid: 'Email veya parola yanlış',
                    })
                }
            })
        }
        event.preventDefault();
    }


    function cardBody() {
        return (
            <Form>
                <span className='text-danger'>{errors.invalid}</span>
                <FormGroup label={"Email Adresi"} type={"email"} name={'email'} value={user.email}
                           onChange={handleChange} placeholder={"Email Adresiniz"} error={errors.email}/>
                <FormGroup label={"Parola"} type={"password"} name={'password'} value={user.password}
                           onChange={handleChange} placeholder={"Parolanız"} error={errors.password}/>
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
