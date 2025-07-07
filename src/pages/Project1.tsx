import Header from "../components/1.Header/Header";
import Contact from "../components/6.Contact/Contact";
import Footer from "../components/7.Footer/Footer";

const Project1 = () => {
    return (
        <>
        
            <Header />
            <div>
            <div className="project1-page">
                <h1>
                    Project1
                </h1>
                <img src="/src/assets/images/1.jpg" alt="Project 1" />
                <p>
                    This is the first project of the course. It is a simple single-page application that demonstrates basic React concepts.
                </p>
            <div className="navigation-buttons">
                <a href="/" className="back-link">Back to Home</a>
                <a href="/project2" className="next-link">Next Project</a>
            </div>
            </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
}

export default Project1;