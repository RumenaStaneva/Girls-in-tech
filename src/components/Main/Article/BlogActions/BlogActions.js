import React, { useState } from 'react';
import { db } from '../../../../services/firebase'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';



const BlogActions = ({ blog }) => {

    function refreshPage() {
        window.location.reload();
    }

    const onDelete = () => {
        db.collection('blogs').doc(blog.id).delete()
        alert('Successfully deleted!');
        refreshPage();
    }
    return (
        <div className="article__actions">
            <Link to={`/edit/${blog.id}`}><button type="submit" className="btn">Edit</button></Link>
            <button type="submit" className="btn" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default BlogActions;
