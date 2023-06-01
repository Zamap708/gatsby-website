import "./services.css"

export default function Services() {
    return (
        <div className="services page">
            <div className="container">
                <h1 className="heading">Our Services</h1>
                <div className="service-box-wrapper">
                    <div className="service-box">
                        <div className="image web-dev-img"></div>
                        <h3 className="sub-heading service-heading">Web Development</h3>
                        <p className="content ta-center box-content">
                            We build custom websites that are tailored to your specific needs and built with the latest technologies to drive conversions and traffic.
                        </p>
                    </div>
                    <div className="service-box">
                        <div className="image responsive-design-img"></div>
                        <h3 className="sub-heading service-heading">Responsive Design</h3>
                        <p className="content ta-center box-content">
                            Our team creates responsive designs that are mobile-friendly and optimized for all devices, ensuring that your website looks great and functions properly.
                        </p>
                    </div>
                    <div className="service-box">
                        <div className="image hosting-img"></div>
                        <h3 className="sub-heading service-heading">Maintenance and Hosting</h3>
                        <p className="content ta-center box-content">
                            We offer monthly maintenance plans for your website to keep your site updated with the latest technologies, providing content updates and hosting your site. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}