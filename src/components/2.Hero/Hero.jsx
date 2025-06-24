import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_container">
                <div className="hero_content">
                    <h1 className="hero_title">Welcome to Our Website</h1>
                    <p className="hero_description">Discover amazing content and connect with us.</p>
                    <a href="#about" className="hero_button">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;