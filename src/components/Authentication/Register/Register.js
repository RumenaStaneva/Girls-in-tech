import React, { useCallback } from "react";
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
                                    <label className="form__label">Email

                                    <input type="email" id="email" name="email" className="form__field" placeholder="E.g: pesho123@gmail.com" /></label>
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