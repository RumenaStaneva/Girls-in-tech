import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase'
import Calendar from './Calendar'
import './Events.css'


const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('events').get();
            setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])
    return (
        <div>
            {events.map(event => {
                return (
                    <section className="section-default">
                        <div className="shell">
                            <div className="section__inner">
                                <div className="section__head">
                                    <h2 className="section__title">Upcoming Events</h2>
                                </div>

                                <div className="section__body">
                                    <div className="challenges">
                                        <div className="challenges__item">
                                            <div className="challenge">
                                                <p className="challenge__title">{event.name}</p>

                                                <p className="challenge__time">When: {event.date}</p>

                                                <p className="challenge__place">Where: {event.place}</p>

                                                <div className="challenge__description">
                                                    <p>{event.description}</p>
                                                </div>

                                                <div className="challenge__actions">
                                                    <a href="#" className="challenge__btn">Going</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            )}


            <Calendar />
        </div>
    );
};

export default Events;