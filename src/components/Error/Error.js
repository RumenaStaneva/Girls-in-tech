import errorCat from '../../static/error-cat.jpg'
import './Error.css'
const Error = () => {
    return (
        <section class="section-default">
            <div class="shell">
                <div class="section__inner">
                    <div class="section__head">
                        <h2 class="section__title">404 not found {`:(`}</h2>
                    </div>

                    <div class="section__body">
                        <div class="error-message">
                            <div class="error__entry">
                                <p>Sorry, we can’t find this page. {`:(`}</p>
                            </div>

                            <div class="error__image">
                                <img src={`${errorCat}`} alt="Sad Kitty" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Error;