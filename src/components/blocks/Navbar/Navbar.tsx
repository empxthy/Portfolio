import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faAddressBook, faStar, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Styles from './Navbar.module.scss';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { path: "/", label: "Home", icon: faHome, external: false },
        { path: "/about", label: "About Me", icon: faUser, external: false },
        { path: "/resume", label: "Resume", icon: faAddressBook, external: false },
        { path: "https://github.com/empxthy", label: "Star on Github", icon: faStar, external: true }
    ];

    return (
        <nav className={`sticky top-0 w-full z-50 py-4 transition-all duration-300 ease-in-out ${isScrolled ? " backdrop-blur-lg rounded" : "bg-transparent"}`}>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-1">
                <h1 className={`${Styles.logo}`}>AlexM.</h1>
                <div className="hidden md:flex">
                    <ul className="flex relative space-x-4">
                        {links.map((link, index) => (
                        <li key={index} className="relative group">
                            {link.external ? (
                            <a
                                href={link.path}
                                className="text-white transition duration-300 flex items-center hover:text-black hover:bg-gray-200 px-2 py-1 rounded-md"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={link.icon} className="mr-2" />
                                {link.label}
                            </a>
                            ) : (
                            <Link
                                to={link.path}
                                className="text-white transition duration-300 flex items-center hover:text-black hover:bg-gray-200 px-2 py-1 rounded-md"
                            >
                                <FontAwesomeIcon icon={link.icon} className="mr-2" />
                                {link.label}
                            </Link>
                            )}
                            <span className="absolute left-0 right-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </li>
                        ))}
                    </ul>
                </div>
                <button onClick={toggleMobileMenu} className="md:hidden text-white">
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>
            </div>
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <ul className={`p-2 space-y-2 ${isMobileMenuOpen ? "block" : "hidden"} flex flex-col items-center backdrop-blur-lg`}>
                {links.map((link, index) => (
                    <li key={index} className="relative group">
                    {link.external ? (
                        <a
                        href={link.path}
                        className="text-white transition duration-300 flex items-center hover:text-black hover:bg-gray-200 px-2 py-1 rounded-md"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                        {link.label}
                        </a>
                    ) : (
                        <Link
                        to={link.path}
                        className="text-white transition duration-300 flex items-center hover:text-black hover:bg-gray-200 px-2 py-1 rounded-md"
                        >
                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                        {link.label}
                        </Link>
                    )}
                    <span className="absolute left-0 right-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </li>
                ))}
                </ul>
            </div>
        </nav>
);
}

export default NavBar;
