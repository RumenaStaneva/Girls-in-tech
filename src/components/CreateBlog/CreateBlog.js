import './CreateBlog.css'
import React, { useState } from 'react';
import { db } from '../../services/firebase'


const CreateBlog = ({ history }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    const onCreate = (e) => {
        e.preventDefault()
        let today = new Date().toISOString().slice(0, 10);
        const username = localStorage.getItem('username');
        const uid = localStorage.getItem('uid');
        const imgValidator = /(https?:\/\/.*\.(?:png|jpg))/i;
        if (title === '' && title <= 0) {
            alert('Please write a title!');
            return;
        }

        if (content === '' && content <= 1) {
            alert('Please write a content to your post!');
            return;
        }

        const validatedImg = imgValidator.test(imgUrl);
        console.log(validatedImg);

        if (imgUrl === '' || !validatedImg) {
            alert('Please provide a valid image url to your post! The valid formats for img url has to start with http/https and end with .jpg/.png!');
            return;
        }
        try {
            db.collection('blogs').add({ title: title, content: content, imgUrl: imgUrl, createdAt: today, author: username, authorId: uid })
            alert('Successfully created post!')
            //not working
            e.target.reset();
            history.push('/')
        }
        catch (err) {
            console.log(err.message);
        }



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
                                    <label className="form__label">Title

                                    <input type="title" id="title" name="title" className="form__field" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Content

                                    <input type="content" id="content" name="content" className="form__field" value={content} onChange={(e) => setContent(e.target.value)} />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Image URL

                                    <input type="content" id="imgUrl" name="imgUrl" className="form__field" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                                    </label>
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