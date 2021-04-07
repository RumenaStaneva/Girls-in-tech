import { db } from '../../../../services/firebase'
import { Link } from 'react-router-dom'



const BlogActions = ({ blog, onBlogDelete }) => {

    const onDelete = async () => {
        await db.collection('blogs').doc(blog.id).delete();
        onBlogDelete();
        alert('Successfully deleted!');

    }
    return (
        <div className="article__actions">
            <Link to={`/edit/${blog.id}`}><button type="submit" className="btn">Edit</button></Link>
            <button type="submit" className="btn" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default BlogActions;