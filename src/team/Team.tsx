import "./team.css"

export default function Team() {
    return (
        <div className="team page">
            <div className="container">
                <h1 className="heading">Our Team</h1>
                <div className="team-box-wrapper">
                    <div className="team-box">
                        <h1 className="sub-heading team-heading">Web Developers</h1>
                        <p className="content">
                            Passionate and experienced web developers who stay up-to-date with the latest trends and technologies to create top-notch solutions.
                        </p>
                    </div>
                    <div className="team-box">
                        <h1 className="sub-heading team-heading">Graphic Designers</h1>
                        <p className="content">
                            Our graphic designers that create visually appealing designs that capture the essence of your brand and communicate your message effectively.
                        </p>
                    </div>
                    <div className="team-box">
                        <h1 className="sub-heading team-heading">Project Managers</h1>
                        <p className="content">
                            Our project managers lead the project from start to finish and ensure that it is delivered on time, within budget, and meets all of the clients' needs.
                        </p>
                    </div>
                    <div className="team-box">
                        <h1 className="sub-heading team-heading">Quality Assurance Testers</h1>
                        <p className="content">
                            Our team includes quality assurance testers who ensure that the final product is free of errors and meets all of the clients' specifications and requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}