import '../Authentication.css';
import { auth } from '../../../services/firebase'
import { Link } from "react-router-dom";
import LoginValidator from "../../../services/LoginValidator.js";


const Login = ({ history }) => {
    const onLoginSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //console.log(userCredential.user.uid);
                //LoginValidator(userCredential.user.uid)
                let username = email.split('@').shift();
                username = username[0].charAt(0).toUpperCase() + username.slice(1);

                localStorage.setItem('uid', userCredential.user.uid)
                localStorage.setItem('username', username)
                history.push('/');
            });
    }

    return (
        <>
            <section className="section-form">
                <div className="shell">
                    <div className="section__inner">
                        <div className="form-authentication">
                            <form onSubmit={onLoginSubmit}>
                                <div className="form__head">
                                    <h2 className="form__title">Login</h2>
                                </div>

                                <div className="form__body">
                                    <div className="form__row">
                                        <label className="form__label">Email
                                        <input type="email" id="email" name="email" className="form__field"
                                                placeholder="E.g: peshopetrov@gmail.bg"></input>
                                        </label>
                                    </div>

                                    <div className="form__row">
                                        <label className="form__label">Password

                                        <input type="password" id="password" name="password" className="form__field"
                                                placeholder="Your Password"></input>
                                        </label>
                                    </div>
                                </div>


                                <div className="section-learn-more">
                                    <div className="section__inner">
                                        <p>Not a member? <Link to="/register">Register here.</Link></p>

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
};

export default Login;