
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import '../Authentication.css'
import { app } from './../../../services/firebase'



const Register = ({ history }) => {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        let { email, password, repeatPassword } = event.target.elements;
        if (password.length < 6) {
            alert('Password should be at least 6 characters long!');
            email = '';
            password = '';
            repeatPassword = '';
            return;
        }
        if (password !== repeatPassword && password.length >= 6) {
            alert('Passwords are not the same!');
            return;
        }
        if (!email) {
            alert('Please enter your email!');
            return;
        }
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            alert('success')
            history.push("/login");
        } catch (error) {
            alert(error);
        }


    }, [history]);
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
                                    <label for="name" className="form__label">Name</label>

                                    <input type="name" id="name" name="name" className="form__field"
                                    />
                                </div>
                                <div className="form__row">
                                    <label for="email" className="form__label">Email</label>

                                    <input type="email" id="email" name="email" className="form__field" />
                                </div>

                                <div className="form__row">
                                    <label for="password" className="form__label">Password</label>

                                    <input type="password" id="password" name="password" className="form__field" />
                                </div>

                                <div className="form__row">
                                    <label for="repeatPassword" className="form__label">Repeat Password</label>

                                    <input type="password" id="repeatPassword" name="repeatPassword" className="form__field" />
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