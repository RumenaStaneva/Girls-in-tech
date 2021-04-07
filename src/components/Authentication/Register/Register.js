import React, { useCallback } from "react";
import { Link } from 'react-router-dom'
import '../Authentication.css'
import { app } from './../../../services/firebase'



const Register = ({ history }) => {
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        const password = event.target.password.value;
        const repeatPassword = event.target.repeatPassword.value;

        if (password.length < 6) {
            alert('Password should be at least 6 characters long!');
            email = '';
            password = '';
            repeatPassword = '';
            return;
        }
        if (password !== repeatPassword && password.length >= 6) {
            console.log(`error pass`);
            alert('Passwords are not the same!');
            return;
        }
        if (!email) {
            alert('Please enter your email!');
            return;
        }
        try {
            app
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    alert('success')
                    history.push("/login");
                })
                .catch(err => {
                    alert(err.message);
                    return
                })

        } catch (error) {
            alert(error);
            return
        }


    };
    return (
        <section className="section-form">
            <div className="shell">
                <div className="section__inner">
                    <div className="form-authentication">
                        <form onSubmit={handleRegister}>
                            <div className="form__head">
                                <h2 className="form__title">Register</h2>
                            </div>

                            <div className="form__body">
                                <div className="form__row">
                                    <label className="form__label">Email

                                    <input type="email" id="email" name="email" className="form__field" placeholder="E.g: pesho123@gmail.com" />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Password

                                    <input type="password" id="password" name="password" className="form__field" placeholder="Your password" /></label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Repeat Password

                                    <input type="password" id="repeatPassword" name="repeatPassword" className="form__field" placeholder="Repeat your password" /></label>
                                </div>
                            </div>

                            <div className="section-learn-more">
                                <div className="section__inner">
                                    <p>Already have an account? <Link to="/login">Log in here.</Link></p>

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
    );

}
export default Register;