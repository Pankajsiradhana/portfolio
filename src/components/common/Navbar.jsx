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

    const navLinkStyle = {
        color: 'rgba(255,255,255,0.65)',
        fontSize: 13,
        fontWeight: 500,
        textDecoration: 'none',
        padding: '7px 18px',
        borderRadius: 100,
        transition: 'all 0.18s ease',
        fontFamily: '"DM Sans", sans-serif',
    };

    const isWorkActive = location.pathname === '/work' || location.pathname.startsWith('/project');

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                style={{
                    position: 'fixed',
                    top: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 9999,
                    background: '#0A2E1A',
                    borderRadius: 100,
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.22)',
                }}
            >
                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        background: '#FCEE0A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        marginRight: 8,
                        flexShrink: 0,
                    }}
                >
                    <span
                        style={{
                            fontFamily: '"Bebas Neue", cursive',
                            fontSize: 14,
                            color: '#0A2E1A',
                            fontWeight: 700,
                            lineHeight: 1,
                        }}
                    >
                        PS
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    <button
                        onClick={() => scrollToSection('about')}
                        style={navLinkStyle}
                        className="nav-link"
                        onMouseEnter={(e) => {
                            e.target.style.background = '#FCEE0A';
                            e.target.style.color = '#0A2E1A';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'rgba(255,255,255,0.65)';
                        }}
                    >
                        About
                    </button>
                    <Link
                        to="/work"
                        style={{
                            ...navLinkStyle,
                            ...(isWorkActive
                                ? { background: '#FCEE0A', color: '#0A2E1A' }
                                : {}),
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#FCEE0A';
                            e.target.style.color = '#0A2E1A';
                        }}
                        onMouseLeave={(e) => {
                            if (!isWorkActive) {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'rgba(255,255,255,0.65)';
                            }
                        }}
                    >
                        Work
                    </Link>
                    <button
                        onClick={() => scrollToSection('skills')}
                        style={navLinkStyle}
                        className="nav-link"
                        onMouseEnter={(e) => {
                            e.target.style.background = '#FCEE0A';
                            e.target.style.color = '#0A2E1A';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'rgba(255,255,255,0.65)';
                        }}
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        style={navLinkStyle}
                        className="nav-link"
                        onMouseEnter={(e) => {
                            e.target.style.background = '#FCEE0A';
                            e.target.style.color = '#0A2E1A';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'rgba(255,255,255,0.65)';
                        }}
                    >
                        Contact
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ background: 'none', border: 'none', padding: 8 }}
                >
                    {mobileOpen ? (
                        <X size={20} color="#F5F0E8" />
                    ) : (
                        <Menu size={20} color="#F5F0E8" />
                    )}
                </button>
            </nav>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9998,
                        background: '#0A2E1A',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 32,
                    }}
                >
                    <button
                        onClick={() => scrollToSection('about')}
                        style={{
                            color: '#F5F0E8',
                            fontSize: 32,
                            fontFamily: '"Syne", sans-serif',
                            fontWeight: 800,
                            background: 'none',
                            border: 'none',
                        }}
                    >
                        About
                    </button>
                    <Link
                        to="/work"
                        style={{
                            color: '#F5F0E8',
                            fontSize: 32,
                            fontFamily: '"Syne", sans-serif',
                            fontWeight: 800,
                            textDecoration: 'none',
                        }}
                        onClick={() => setMobileOpen(false)}
                    >
                        Work
                    </Link>
                    <button
                        onClick={() => scrollToSection('skills')}
                        style={{
                            color: '#F5F0E8',
                            fontSize: 32,
                            fontFamily: '"Syne", sans-serif',
                            fontWeight: 800,
                            background: 'none',
                            border: 'none',
                        }}
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        style={{
                            color: '#F5F0E8',
                            fontSize: 32,
                            fontFamily: '"Syne", sans-serif',
                            fontWeight: 800,
                            background: 'none',
                            border: 'none',
                        }}
                    >
                        Contact
                    </button>
                </div>
            )}
        </>
    );
}
