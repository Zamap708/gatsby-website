import "./hero.css"

export default function Hero(props) {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-text-container">
                    <h1 className="title">Discover the <span className="yellow">Art</span>  of <span className="yellow"> Web</span> Design</h1>
                    <p className="content hero-content">At Gatsby Softworks, we provide premier web development services to
                        businesses of all sizes. Our team of experts is committed to delivering high quality web solutions that meet our clients' needs and exceed their
                        expectations. Let us help you achieve your goals today!</p>
                    <button className="cta-btn" onClick={props.handleClick}>Get Started</button>
                </div>
            </div>

        </div>
    )
}