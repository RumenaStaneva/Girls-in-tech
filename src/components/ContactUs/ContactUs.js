import React from 'react';
import './ContactUs.css'
import ContactForm from './ContactForm'
import Jobs from './Jobs'

const ContactUs = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <section className="section-contact">
                <div className="shell">
                    <div className="section__inner">
                        <div className="section__head">
                            <h2 className="section__title">We are looking for:</h2>
                        </div>
                        <Jobs />
                        <div className="section__offer">
                            <h3 className="section__title-secondary">What we offer:</h3>

                            <ul>
                                <li>- Competitive compensation package and bonus related to performance</li>

                                <li>- Committees by interests and culture activities</li>

                                <li>- Healthy work environment – medical insurance and sport cards</li>

                                <li>- Corporate social responsibility (CSR programs).</li>

                                <li>- Corporate events and team buildings</li>
                            </ul>
                        </div>

                        <div className="section__apply">
                            <h3 className="section__title-secondary">How to apply?</h3>

                            <p className="section__cv">Send you CV here:</p>

                            <p className="section__email"><a href="mailto:girlsintech@gmail.com">girlsintech@gmail.com</a></p>

                            <p className="section__warning">Please make sure to write in the theme for which position you are applying!</p>
                        </div>

                        <div className="section__address">
                            <h4 className="section__message">Or if you are from Varna, you can visit us at our office!</h4>

                            <div className="section__address-inner">
                                <div className="section__addresses">
                                    <address>
                                        Business Park Varna, Building B8
                                        Address: 2 29, 9023 Zapad, Varna
                            </address>
                                    <p>Phone: <a href="tel:08812345678">08812345678</a></p>
                                </div>

                                <div className="section__map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.171253627713!2d27.854923715712893!3d43.22686898791122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454a5dc7cbd57%3A0x98f725585a50081e!2sBusiness%20Park%20Varna%2C%20Building%20B8!5e0!3m2!1sen!2sbg!4v1616344122460!5m2!1sen!2sbg" width="519" height="275" allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <ContactForm />
                        </div>


                    </div>
                </div>

            </section>
        </>
    );
};

export default ContactUs;