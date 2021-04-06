import React from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_apkknq4', 'template_gf97dx2', e.target, 'user_vV3byY1AmQeW5SbRaxZJT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="section__form">
            <div className="form-authentication form-authentication--contact">
                <form onSubmit={sendEmail}>
                    <div className="form__head">
                        <h2 className="form__title">Contact Us</h2>
                    </div>

                    <div className="form__body">
                        <div className="form__row">
                            <label className="form__label">Name
                            <input type="name" id="name" name="name" className="form__field" />
                            </label>
                        </div>
                        <div className="form__row">
                            <label className="form__label">Email
                            <input type="email" id="email" name="email" className="form__field" />
                            </label>
                        </div>

                        <div className="form__row">
                            <label className="form__label">Subject
                            <input type="subject" id="subject" name="subject" className="form__field" />
                            </label>
                        </div>

                        <div className="form__row">
                            <label className="form__label">Message

                            <textarea name="message" id="message" className="form__field form__textarea"></textarea>
                            </label>
                        </div>
                    </div>

                    <div className="form__actions">
                        <button type="submit" className="form__btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;