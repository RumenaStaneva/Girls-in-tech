import logo from '../../../static/logo.png'
import React, { useState, useEffect } from 'react';
import BlogActions from './BlogActions'
import { db } from '../../../services/firebase'
import './Article.css'
import { Link } from 'react-router-dom';

function Article() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('blogs').get();
            setBlogs(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])



    return (
        <div className="article">
            {

                blogs.map(blog => {
                    //console.log(blog);
                    return (
                        <div className="article__inner">
                            <div className="article__content">
                                <div className="article__head">
                                    <a href="/" className="article__logo">
                                        <img src={logo} alt="Logo" />
                                    </a>

                                    <div className="article__info">
                                        <p>Created at {blog.createdAt}</p>

                                        <p>By {blog.author}</p>
                                    </div>
                                </div>

                                <div className="article__body">
                                    <h2 className="article__title">{blog.title}</h2>

                                    <div className="article__entry">
                                        <p>{blog.content}</p>
                                    </div>
                                    <BlogActions blog={blog} />
                                </div>
                            </div>

                            <div className="article__image" style={{
                                backgroundImage: `url(${blog.imgUrl})`
                            }}></div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Article;