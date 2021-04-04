import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase'
import Calendar from './Calendar'

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
                console.log(event);
                return (
                    <div>
                        <h1>{event.name}</h1>
                        <h2>{event.date}</h2>
                        <h1>{event.place}</h1>
                    </div>
                )
            }
            )}


            <Calendar />
        </div>
    );
};

export default Events;