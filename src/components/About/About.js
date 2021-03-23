const About = ({ match }) => {
    const name = match.params.name;
    console.log(match);
    return (
        <div>
            <h1>About page for {name}</h1>
        </div>
    )

}

export default About;