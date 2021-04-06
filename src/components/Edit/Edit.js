import './Edit.css'
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase'

const Edit = ({ match, history }) => {
    const id = match.params.id;
    const [title, setTitle] = useState('')
    const [content, setContent] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState("")
    const [newImgUrl, setNewImgUrl] = useState("")

    useEffect(() => {

        db.collection('blogs')
            .doc(id)
            .get()
            .then((res) => {
                //console.log(res.data());
                let response = res.data();
                setTitle(response.title)
                setContent(response.content)
                setImgUrl(response.imgUrl)

            })

    }, [])


    const onEdit = (e) => {
        e.preventDefault()
        let today = new Date().toISOString().slice(0, 10)
        console.log(newTitle);
        db.collection('blogs')
            .doc(id)
            .get()
            .then((res) => {
                return db.collection('blogs')
                    .doc(id)
                    .set({
                        ...res.data(),
                        title: newTitle,
                        content: newContent,
                        imgUrl: newImgUrl,
                        createdAt: today
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

                                    <input type="title" id="title" name="title" className="form__field" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder={title} />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Content

                                    <input type="content" id="content" name="content" className="form__field" value={newContent} placeholder={content} onChange={(e) => setNewContent(e.target.value)} />
                                    </label>
                                </div>

                                <div className="form__row">
                                    <label className="form__label">Image URL

                                    <input type="content" id="imgUrl" name="imgUrl" className="form__field" value={newImgUrl} placeholder={imgUrl} onChange={(e) => setNewImgUrl(e.target.value)} />
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