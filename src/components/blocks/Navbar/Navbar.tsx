import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faDiagramProject, faAddressBook, faStar, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`z-5 py-4 ${isScrolled ? 'bg-black-800 backdrop-blur-lg' : 'bg-transparent'} fixed`}>
            <div className="container mx-auto flex items-center  md:px-1">
                <h1 className={`${Styles.logo} flex-shrink-0`}>AlexM.</h1>
                <div className="hidden md:flex">
                    <ul className="flex relative pl-80 space-x-4">
                        {['/', '#aboutme', '#projects', '#resume', 'https://github.com/empxthy'].map((link, index) => (
                            <li key={index} className="relative group">
                                <a 
                                    href={link} 
                                    className="text-white transition duration-300 flex items-center hover:text-black hover:bg-gray-200 px-2 py-1 rounded-md"
                                    target={link === 'https://github.com/empxthy' ? '_blank' : '_self'}
                                    rel={link === 'https://github.com/empxthy' ? 'noopener noreferrer' : undefined}
                                >
                                    <FontAwesomeIcon icon={index === 0 ? faHome : index === 1 ? faUser : index === 2 ? faDiagramProject : index === 3 ? faAddressBook : faStar} className="mr-2" />
                                    {index === 0 ? 'Home' : index === 1 ? 'About Me' : index === 2 ? 'Projects' : index === 3 ? 'Resume' : 'Star on Github'}
                                </a>
                                <span className="absolute left-0 right-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={toggleMobileMenu} className="md:hidden text-white">
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>
            </div>
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className={`bg-black-800 p-2 space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    {['/', '#aboutme', '#projects', '#resume', 'https://github.com/empxthy'].map((link, index) => (
                        <li key={index} className="relative">
                            <a 
                                href={link} 
                                className="text-white transition duration-300 flex items-center hover:text-black hover:bg-gray-200 px-2 py-1 rounded-md"
                                target={link === 'https://github.com/empxthy' ? '_blank' : '_self'}
                                rel={link === 'https://github.com/empxthy' ? 'noopener noreferrer' : undefined}
                            >
                                <FontAwesomeIcon icon={index === 0 ? faHome : index === 1 ? faUser : index === 2 ? faDiagramProject : index === 3 ? faAddressBook : faStar} className="mr-2" />
                                {index === 0 ? 'Home' : index === 1 ? 'About Me' : index === 2 ? 'Projects' : index === 3 ? 'Resume' : 'Star on Github'}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
