import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import womanCoding from '../../static/woman-coding.jpg'
import womanCoding2 from '../../static/woman-coding-2.jpg'
import womanCoding3 from '../../static/woman-coding-3.jpg'
import coderGirl from '../../static/coder-girl.png'
import goLife from '../../static/go-life.png'
import flatRock from '../../static/flat-rock.jpg'


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
                                            <p>We are a small community of women who works in different tech industries. We are all very passionate and hard-working.</p>
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
                                        <p>Our mission is gender equality in the tech sphere. We want to create an inclusive environment where females are welcomed, encouraged, and nurtured.</p>
                                    </div>
                                </div>

                                <div className="message__image" style=
                                    {{ backgroundImage: `url(${womanCoding2})` }}>
                                </div>
                            </div>
                        </div>

                        <div className="messages">
                            <div className="messages__item">
                                <div className="message">
                                    <div className="message__content">
                                        <h3 className="message__title">Why choose us?</h3>

                                        <div className="message__entry">
                                            <p>We are the first and the only organization in Bulgaria, fighting for equality in the world of technology! We cooperate in connection with the trade unions regarding the problems of labor and legal relations related to gender inequality.</p>
                                        </div>
                                    </div>

                                    <div className="message__image" style=
                                        {{ backgroundImage: `url(${womanCoding3})` }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section__actions">
                        <p>Want to be part of our team? <a href="/contactUs">See our free positions.</a></p>
                    </div>

                    <div className="section__partners">
                        <h2 className="section__title">
                            Our Partners
                        </h2>
                        <div className="section__partner">
                            <div className="partner">
                                <h1 className="partner__name">Go Life</h1>
                                <a href="https://www.instagram.com/go.lifee/" target="_blank">
                                    <img src={goLife} alt="Go Life" className="partner__image" />
                                </a>
                            </div>

                            <div className="partner">
                                <h1 className="partner__name">Flat Rock</h1>
                                <a href="https://www.instagram.com/flatrockteam/" target="_blank">
                                    <img src={flatRock} alt="Go Life" className="partner__image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )

}

export default About;