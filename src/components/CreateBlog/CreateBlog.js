import './CreateBlog.css'
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase'
import { Redirect } from "react-router-dom";

const CreateBlog = ({ history }) => {
    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")
    const [newImgUrl, setNewImgUrl] = useState("")

    const onCreate = (e) => {
        e.preventDefault()
        let today = new Date().toISOString().slice(0, 10)
        console.log(newTitle);
        db.collection('blogs').add({ title: newTitle, content: newContent, imgUrl: newImgUrl, createdAt: today, author: 'rumba-pumba' })
        alert('Successfully created post!')
        //not working
        e.target.reset();
        history.push('/')

    }

    return (
        <section className="section-form">
            <div className="shell">
                <div className="section__inner">
                    <div className="form-blog">
                        <form onSubmit={e => { onCreate(e) }}>
                            <div className="form__head">
                                <h2 className="form__title">Create you post</h2>
                            </div>

                            <div className="form__body">
                                <div className="form__row">
                                    <label for="title" className="form__label">Title</label>

                                    <input type="title" id="title" name="title" className="form__field" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                                </div>

                                <div className="form__row">
                                    <label for="content" className="form__label">Content</label>

                                    <input type="content" id="content" name="content" className="form__field" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                                </div>

                                <div className="form__row">
                                    <label for="imgUrl" className="form__label">Image URL</label>

                                    <input type="content" id="imgUrl" name="imgUrl" className="form__field" value={newImgUrl} onChange={(e) => setNewImgUrl(e.target.value)} />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button type="submit" className="form__btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >

    );
};


export default CreateBlog;