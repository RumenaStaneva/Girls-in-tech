import logo from '../../../../static/logo.png'
import React, { useState, useEffect, useCallback } from 'react';
import BlogActions from './BlogActions'
import { db } from '../../../../services/firebase'
import './Article.css'


function Article() {
    const [blogs, setBlogs] = useState([]);
    const fetchData = useCallback(async () => {
        const data = await db.collection('blogs').get();
        setBlogs(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    });
    useEffect(fetchData, []);


    return (

        <div className="article">
            {

                blogs.map(blog => {
                    console.log(`hello`)
                    //console.log(blog.id);
                    return (
                        <div className="article__inner" key={blog.id}>
                            <div className="article__content" >
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
                                    <BlogActions blog={blog} onBlogDelete={fetchData} />
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