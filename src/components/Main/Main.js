import Article from './Article'
import { Link } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div>
            <section className="section-slider">
                <div className="shell">
                    <Article />
                </div>
            </section>

            <section className="section-learn-more">
                <div className="section__inner">
                    <p>Want to be part of our community? <Link to="/createBlog">Write a post.</Link></p>
                </div>
            </section>
        </div>
    )

}

export default Main;