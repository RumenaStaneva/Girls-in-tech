import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cat from '../../static/error-cat.jpg'
import { db } from '../../services/firebase.js'
import './Profile.css'


const Profile = () => {
    const username = localStorage.getItem('username')
    const uid = localStorage.getItem('uid')

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('blogs').get();
            setBlogs(data.docs.map(doc => ({ ...doc.data(), id: doc.id })).filter(x => x.authorId == uid))
        }
        fetchData()
    }, [])



    console.log(blogs);
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
                                {blogs.map(blog => {
                                    return (
                                        <div className="posts__items">
                                            <div className="posts__item">
                                                <div className="post">
                                                    <a href="#" className="post__background" style={{ backgroundImage: `url(${blog.imgUrl})` }}></a>

                                                    <h3 className="post__title">
                                                        <Link to={`/edit/${blog.id}`}>
                                                            {blog.title}
                                                        </Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    )










                                    {/* <div className="section__item">
                                    <div className="posts">
                                        <h2 className="posts__title">You are going to:</h2>

                                        <div className="posts__items">
                                            <div className="posts__item">
                                                <div className="post">
                                                    <Link to="/" className="post__background" style={{ backgroundImage: `url(${cat})` }}></Link>

                                                    <h3 className="post__title"><Link to="/">Event 1</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;