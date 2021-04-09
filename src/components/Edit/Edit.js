import './Edit.css'
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase'

const Edit = ({ match, history }) => {

    const id = match.params.id;
    const [title, setTitle] = useState('')
    const [content, setContent] = useState("")
    const [imgUrl, setImgUrl] = useState("")


    useEffect(() => {

        db.collection('blogs')
            .doc(id)
            .get()
            .then((res) => {

                let response = res.data();
                setTitle(response.title)
                setContent(response.content)
                setImgUrl(response.imgUrl)

            })

    }, [])


    const onEdit = (e) => {
        const imgValidator = /(https?:\/\/.*\.(?:png|jpg))/i;
        const validatedImg = imgValidator.test(imgUrl);
        e.preventDefault();
        if (title === '' && title <= 0) {
            alert('Please write a title!');
            return;
        }

        if (content === '' && content <= 1) {
            alert('Please write a content to your post!');
            return;
        }
        if (imgUrl === '' || !validatedImg) {
            alert('Please provide a valid image url to your post! The valid formats for img url has to start with http/https and end with .jpg/.png!');
            return;
        }
        db.collection('blogs')
            .doc(id)
            .get()
            .then((res) => {
                return db.collection('blogs')
                    .doc(id)
                    .set({
                        ...res.data(),
                        title: title,
                        content: content,
                        imgUrl: imgUrl,
                    })
            })
            .then((blog) => {
                alert(`Successfully edited post!`)
                history.push('/')
            }).catch(e => console.log(e))


    }

    return (
        <section className="section-form">
            <div className="shell">
                <div className="section__inner">
                    <div className="form-blog">
                        <form onSubmit={e => { onEdit(e) }}>
                            <div className="form__head">
                                <h2 className="form__title">Edit your post</h2>
                            </div>

                            <div className="form__body">
                                <div className="form__row">
                                    <label className="form__label">Title

                                    <input type="title" id="title" name="title" className="form__field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={title} />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Content

                                    <input type="content" id="content" name="content" className="form__field" value={content} placeholder={content} onChange={(e) => setContent(e.target.value)} />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Image URL

                                    <input type="content" id="imgUrl" name="imgUrl" className="form__field" value={imgUrl} placeholder={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
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


export default Edit;