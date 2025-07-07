import Header from "../components/1.Header/Header";
import Contact from "../components/6.Contact/Contact";
import Footer from "../components/7.Footer/Footer";

const Project2 = () => {
    return (
        <>
        
            <Header />
            <div>
            <div className="Project2-page">
                <h1>
                    Project2
                </h1>
                <img src="/src/assets/images/2.jpg" alt="Project 2" />
                <p>
                    This is the second project of the course. It is a simple single-page application that demonstrates basic React concepts.
                </p>
            <div className="navigation-buttons">
                <a href="/" className="back-link">Back to Home</a>
                <a href="/project3" className="next-link">Next Project</a>
            </div>
            </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
}

export default Project2;