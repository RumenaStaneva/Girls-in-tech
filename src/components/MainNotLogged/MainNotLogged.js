import React from 'react';
import logo2 from "../../static/logo-2.png";
import { Link } from "react-router-dom";

const MainNotLogged = () => {
    return (
        <section className="section-default">
            <div className="shell">
                <div className="section__inner">
                    <div className="section__head">
                        <h2 className="section__title">Welcome</h2>
                    </div>

                    <div className="section__body">
                        <div className="action">
                            <div className="action__image">
                                <img src={logo2} alt="Logo" />
                            </div>

                            <div className="action__entry">
                                <p><Link to="/login">Log in</Link> or <Link to="/register">register</Link> to see what we got! {`:)`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainNotLogged;