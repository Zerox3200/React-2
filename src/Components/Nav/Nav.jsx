import { Link, useLocation } from 'react-router-dom'
import './Nav.scss'
import { useState } from 'react'

export default function Nav() {
    const Location = useLocation();
    const [ShowSide, setShowSide] = useState(false);

    const SideNavHandler = () => {
        if (ShowSide) {
            setShowSide(false);
        } else {
            setShowSide(true);
        }
    }
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">START FRAMEWORK</p>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className={Location.pathname === '/' ? "nav-link Active" : "nav-link Display"}
                            aria-current="page" to="">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={Location.pathname === '/Portfolio' ? "nav-link Active" : "nav-link Display"}
                            to="Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={Location.pathname === '/Contact' ? "nav-link Active" : "nav-link Display"}
                            to="Contact">Contact</Link>
                    </li>
                </ul>
                <label htmlFor="Menu" className="Menu" >
                    <input id="Menu" type="checkbox" onClick={() => SideNavHandler()} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className={ShowSide ? "Sidenav Show" : "Sidenav hide"}>
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
