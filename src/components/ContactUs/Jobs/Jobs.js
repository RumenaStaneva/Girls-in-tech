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
                                    {offer.requirements.split('-').map(require => {
                                        return (
                                            <li> - {require}</li>

                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="position">
                            <h3 className="position__title">{offer.jobTitle}</h3>

                            <div className="position__entry">
                                <p>Requirements:</p>
                                <ul>
                                    {offer.requirements.split('-').map(require => {
                                        return (
                                            <li> - {require}</li>

                                        )
                                    })
                                    }
                                    {/* <li>- Proven work experience as a Content Editor, Web Editor or similar role</li>

                                    <li>- Portfolio of published work</li>

                                    <li>- Excellent writing and editing skills in English</li>

                                    <li>- Attention to detail</li>

                                    <li>- Hands-on experience with Content Management Systems (e.g. WordPress)</li>

                                    <li>- Familiarity with SEO and keyword research</li>

                                    <li>- Team spirit</li>

                                    <li>- BSc in Marketing, Journalism, Communications or related field</li> */}
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