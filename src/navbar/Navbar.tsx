import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo"></div>
            <ul className="nav-links">
                <li className="nav-link ta-center">Services</li>
                <li className="nav-link ta-center">Team</li>
                <li className="nav-link ta-center">Work</li>
                <li className="nav-link ta-center">Contact</li>
            </ul>
        </div>
    )
}