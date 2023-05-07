import logo from '../assets/globe.png'

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="logo" />
            <div className="nav--title">my travel journal.</div>
        </nav>
    )
}