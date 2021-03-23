import { Fragment } from 'react'
import Article from './Article'
import { Route, Link, Switch } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div>
            <section className="section-slider">
                <div className="shell">
                    <Link key="gosho" to="/about/Gosho"><h1>About the article</h1></Link>
                    <Article />
                </div>
            </section>

            <section className="section-learn-more">
                <div className="section__inner">
                    <p>Want more to read? <a href="/">Visit the archives.</a></p>
                </div>
            </section>

            <Link to="/createBlog"><h1>Create blog</h1></Link>
        </div>
    )

}

export default Main;