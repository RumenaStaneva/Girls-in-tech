import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase'
import Calendar from './Calendar'
import './Events.css'


const Events = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('events').get();
            //console.log(data.docs.map(doc => console.log(doc.data().id)));
            setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])

    let alreadyGoing = false;



    function handleGoingOnEvent(peopleGoing, id) {
        console.log(id);
        const uid = localStorage.getItem('uid');
        const found = peopleGoing.find(x => x == uid);

        if (found) {
            alert('You are already going on this event!');
            alreadyGoing = true;
            return;
        }
        peopleGoing.push(uid);

        db.collection('events')
            .doc(id)
            .get()
            .then((res) => {
                return db.collection('events')
                    .doc(id)
                    .set({
                        ...res.data(),
                        peopleGoing: peopleGoing
                    })
            })
            .then((event) => {
                alert('Successfully subscribed to event! We can`t wait to meet you!')

            }).catch(e => console.log(e))
    }



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
                                                    {alreadyGoing
                                                        ? <button className="challenge__btn">You are already going to this event!</button>
                                                        : <button onClick={() => handleGoingOnEvent(event.peopleGoing, event.id)} className="challenge__btn">Going</button>}



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

}

export default Events;