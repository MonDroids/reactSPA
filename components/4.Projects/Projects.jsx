import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects_content">
                <h2 className="projects_title">Our Projects</h2>
                <h3 className="projects_subtitle">What We Have Done</h3>
                <p className="projects_description">
                    We take pride in our work and the projects we have completed. Here are some of our notable projects that showcase our expertise and dedication.
                </p>
                <div className="projects_list">
                    <div className="projects_item">
                        <h3>Project One</h3>
                        <p>A brief description of the first project.</p>
                    </div>
                    <div className="projects_item">
                        <h3>Project Two</h3>
                        <p>A brief description of the second project.</p>
                    </div>
                    <div className="projects_item">
                        <h3>Project Three</h3>
                        <p>A brief description of the third project.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;