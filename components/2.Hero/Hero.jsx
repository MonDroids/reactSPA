import { useEffect, useState } from "react";
import "./Hero.css";
const images = [
    {
        src: "/src/assets/images/1.jpg",
        title: "Welcome to Our Website",
        subtitle: "Your Journey Begins Here",
        description: "Discover our services and projects",
        link: "/projects1",
        alt: "Hero Image 1"

    },
    {
        src: "/src/assets/images/hero2.jpg",
        title: "Innovative Solutions",
        subtitle: "Empowering Your Business",
        description: "Explore our innovative solutions",
        link: "/projects2",
        alt: "Hero Image 2"
    },
    {
        src: "/src/assets/images/hero3.jpg",
        title: "Join Our Community",
        subtitle: "Together We Achieve More",
        description: "Become a part of our growing community",
        link: "/projects3",
        alt: "Hero Image 3"
    },
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero_slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`hero_slide ${index === currentImage ? "active" : ""}`}
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        
                        <h1 className="hero_title">{image.title}</h1>
                <img src={images[currentImage].src} alt={images[currentImage].alt} className="hero_image" />
                <h1 className="hero_title">{images[currentImage].title}</h1>
                <h2 className="hero_subtitle">{images[currentImage].subtitle}</h2>
                <p className="hero_description">{images[currentImage].description}</p>
                <a href={images[currentImage].link} className="hero_button">Learn More</a>
                    </div>
                ))}
            </div>
            <div className="hero_dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`hero_dot ${index === currentImage ? "active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
// This Hero component displays a rotating set of images with titles, subtitles, descriptions, and a link button.
// The images change every 5 seconds, providing a dynamic introduction to the website.
// The images are stored in an array, and the current image is managed using React's useState and useEffect hooks.
// The component is styled using the "Hero.css" file, which should contain the necessary CSS to make the hero section visually appealing.
// The images should be placed in the specified path, and the alt text should be descriptive for accessibility.
// The Learn More button links to different projects, which can be customized based on your website's structure.
// The component is designed to be reusable