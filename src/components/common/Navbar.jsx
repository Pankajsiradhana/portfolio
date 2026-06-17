import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 400);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const isWorkActive = location.pathname === '/work' || location.pathname.startsWith('/project');

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="navbar">
                {/* Logo — Sparkle Star + Name */}
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-text">PS</span>
                </Link>

                {/* Desktop Links */}
                <div className="navbar__links">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="nav-link"
                    >
                        About me
                    </button>
                    <Link
                        to="/work"
                        className={`nav-link ${isWorkActive ? 'nav-link--active' : ''}`}
                    >
                        Work
                    </Link>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="nav-link"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="nav-cta"
                    >
                        Get in touch
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? (
                        <X size={20} color="#F4F0EA" />
                    ) : (
                        <Menu size={20} color="#F4F0EA" />
                    )}
                </button>
            </nav>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div className="nav-mobile-overlay">
                    <button onClick={() => scrollToSection('about')}>About me</button>
                    <Link to="/work" onClick={() => setMobileOpen(false)}>Work</Link>
                    <button onClick={() => scrollToSection('skills')}>Skills</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </div>
            )}
        </>
    );
}
