import '../Authentication.css';
import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../../../services/Auth";
import { app } from './../../../services/firebase'


const Login = ({ history }) => {
    // const handleLogin = useCallback(
    //     async event => {
    //         event.preventDefault();
    //         const { email, password } = event.target.elements;
    //         try {
    //             await app
    //                 .auth()
    //                 .signInWithEmailAndPassword(email.value, password.value);
    //             history.push("/");
    //         } catch (error) {
    //             alert(error);
    //         }
    //     },
    //     [history]
    // );

    // const { currentUser } = useContext(AuthContext);

    // if (currentUser) {
    //     return <Redirect to="/" />;
    // }
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
                                        <input type="email" id="email" name="email" className="form__field"></input>
                                    </div>

                                    <div className="form__row">
                                        <label for="password" className="form__label">Password</label>

                                        <input type="password" id="password" name="password" className="form__field"></input>
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