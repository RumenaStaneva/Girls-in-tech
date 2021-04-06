import { db } from '../../../../services/firebase'



const BlogActions = ({ blog }) => {

    const onDelete = () => {
        db.collection('blogs').doc(blog.id).delete()
        alert('Successfully deleted!');

    }
    return (
        <div className="article__actions">
            {/* <Link to={`/edit/${blog.id}`}><button type="submit" className="btn">Edit</button></Link> */}
            <button type="submit" className="btn" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default BlogActions;
