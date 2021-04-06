import React, { useState, useEffect } from 'react';

import { db } from '../../../services/firebase'


const Jobs = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('careers').get();
            setOffers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])

    return (
        offers.map(offer => {
            return (
                <div className="section__body">
                    <div className="positions">
                        <div className="position">
                            <h3 className="position__title">{offer.jobTitle}</h3>

                            <div className="position__entry">
                                <p>Requirements:</p>

                                <ul>
                                    {offer.requirements.split(' -').map(require => {
                                        return (
                                            <li> - {require}</li>

                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })


    );
};

export default Jobs;