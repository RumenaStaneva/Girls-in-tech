import '../Authentication.css';
import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../../../services/Auth";
import { app } from './../../../services/firebase'


const Login = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event, email, password) => {
            event.preventDefault();
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'passord') {
            setPassword(value);
        }
    }
    return (
        <>
            <section className="section-form">
                <div className="shell">
                    <div className="section__inner">
                        <div className="form-authentication">
                            <form >
                                <div className="form__head">
                                    <h2 className="form__title">Login</h2>
                                </div>

                                <div className="form__body">
                                    <div className="form__row">
                                        <label for="email" className="form__label">Email</label>
                                        <input type="email" id="email" name="email" className="form__field"
                                            placeholder="E.g: faruq123@gmail.com"
                                            value={email}
                                            onChange={(event) => onChangeHandler(event)}></input>
                                    </div>

                                    <div className="form__row">
                                        <label for="password" className="form__label">Password</label>

                                        <input type="password" id="password" name="password" className="form__field"
                                            value={password}
                                            placeholder="Your Password"
                                            onChange={(event) => onChangeHandler(event)}></input>
                                    </div>
                                </div>

                                <div className="form__actions">
                                    <button type="submit" className="form__btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Login;