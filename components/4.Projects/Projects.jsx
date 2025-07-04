import "./Projects.css";

const projectData = [
    {
        id: "project1",
        title: "Project One",
        description: "This is a brief description of Project One.",
        image: "https://via.placeholder.com/150",
        link: "/project1"
    },
    {
        id: "project2",
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        image: "https://via.placeholder.com/150",
        link: "/project2"
    },
    {
        id: "project3",
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        image: "https://via.placeholder.com/150",
        link: "/project3"
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Our Projects</h2>
            {projectData.map((project, index) => (
                <div
                key={project.id}
                id={project.id}
                className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
                >
                <div className="project-item_content">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="project_image"
                />
                </div>
                <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-button">Read more</a>
                </div>
            </div>
            ))}
        </section>
    );
};
export default Projects;