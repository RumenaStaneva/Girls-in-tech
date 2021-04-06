import { useEffect } from 'react'
import './About.css'
import womanCoding from '../../static/woman-coding.jpg'
import womanCoding2 from '../../static/woman-coding-2.jpg'
import coderGirl from '../../static/coder-girl.png'

const About = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <section className="section-about">
            <div className="section__inner">
                <div className="shell">
                    <div className="section__head">
                        <div className="section__title">
                            <h2>About Girls In Tech</h2>
                        </div>

                        <div className="section__image">
                            <img src={`${coderGirl}`} alt="Coder Girl" />
                        </div>
                    </div>


                    <div className="section__body">
                        <div className="messages">
                            <div className="messages__item">
                                <div className="message">
                                    <div className="message__content">
                                        <h3 className="message__title">Who are we?</h3>

                                        <div className="message__entry">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                    </div>

                                    <div className="message__image" style=
                                        {{ backgroundImage: `url(${womanCoding})` }}>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="messages__item">
                            <div className="message message--reversed">
                                <div className="message__content">
                                    <h3 className="message__title">What we are fighting for?</h3>

                                    <div className="message__entry">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    </div>
                                </div>

                                <div className="message__image" style=
                                    {{ backgroundImage: `url(${womanCoding2})` }}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section__actions">
                        <p>Want to be part of our team? <a href="/contactUs">See our free positions.</a></p>
                    </div>
                </div>
            </div>

        </section >
    )

}

export default About;