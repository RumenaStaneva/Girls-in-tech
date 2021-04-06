import '../Authentication.css';
import { auth } from '../../../services/firebase'


const Login = ({ history }) => {
    const onLoginSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
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
                                                placeholder="E.g: faruq123@gmail.com"></input>
                                        </label>
                                    </div>

                                    <div className="form__row">
                                        <label className="form__label">Password

                                        <input type="password" id="password" name="password" className="form__field"
                                                placeholder="Your Password"></input>
                                        </label>
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