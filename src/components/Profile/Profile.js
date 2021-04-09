import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cat from '../../static/error-cat.jpg'
import { db } from '../../services/firebase.js'
import './Profile.css'


const Profile = () => {
    const username = localStorage.getItem('username')
    const uid = localStorage.getItem('uid')

    const [blogs, setBlogs] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventsGoing, setEventsGoing] = useState([]);
    const [goesToEvent, setGoesToEvent] = useState(false);
    useEffect(() => {
        const fetchBlogData = async () => {
            const data = await db.collection('blogs').get();

            setBlogs(data.docs.map(doc => ({ ...doc.data(), id: doc.id })).filter(x => x.authorId == uid));
        }
        fetchBlogData()
    }, [])

    useEffect(() => {
        const fetchEventsData = async () => {
            const dataEvents = await db.collection('events').get();
            //console.log(dataEvents.docs.data());
            setEvents(dataEvents.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        fetchEventsData()
    }, [])



    let hasBlogs = false;
    if (blogs.length > 0) {
        hasBlogs = true;
    }

    console.log(events)


    // events.map(ev => {
    //     if (ev.peopleGoing.includes(uid)) {
    //         setGoesToEvent(true);
    //         setEventsGoing(ev)
    //     } else {
    //         setGoesToEvent(false);
    //     }
    //     console.log(eventsGoing);
    // });


    return (
        <section className="section-default">
            <div className="shell">
                <div className="section__inner">
                    <div className="section__head">
                        <h2 className="section__title">Hello {username}</h2>
                    </div>

                    <div className="section__body">
                        <div className="section__item">
                            <div className="posts">
                                <h2 className="posts__title">Your posts here</h2>

                                <div className="posts__items">
                                    {hasBlogs
                                        ?
                                        blogs.map(blog => {
                                            return (
                                                <div className="posts__item">
                                                    <div className="post">
                                                        <Link to={`/edit/${blog.id}`} className="post__background" style={{ backgroundImage: `url(${blog.imgUrl})` }}></Link>

                                                        <h3 className="post__title">

                                                            {blog.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                            )

                                        })

                                        : <div className="missing-blogs">
                                            <h1>No posts to show {`:(`}</h1>
                                            <p>Write your first one </p><Link to="/createBlog"> here!</Link>
                                        </div>

                                    }

                                </div>

                                {/* {goesToEvent
                                    ?

                                    <h1>{eventsGoing} </h1>

                                    : <h1>Nothing to show</h1>} */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;