import "./Service.css";

const Service = () => {
    return (
        <section className="service">
            <div className="service_content">
                <h2 className="service_title">Our Services</h2>
                <h3 className="service_subtitle">What We Offer</h3>
                <p className="service_description">
                    We provide a range of services to help you achieve your goals. From web development to SEO optimization, our team is here to support you every step of the way.
                </p>
                <div className="service_list">
                    <div className="service_item">
                        <h3>Web Development</h3>
                        <p>Building responsive and modern websites.</p>
                    </div>
                    <div className="service_item">
                        <h3>Mobile App Development</h3>
                        <p>Creating user-friendly mobile applications.</p>
                    </div>
                    <div className="service_item">
                        <h3>SEO Optimization</h3>
                        <p>Improving your website's visibility on search engines.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Service;