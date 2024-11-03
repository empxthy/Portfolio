import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faDiagramProject, faAddressBook, faStar } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.module.scss";
import Styles from './Navbar.module.scss';

function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <nav className={`fixed top-0 w-full z-50 py-4 px-4 transition duration-300 ${isScrolled ? 'bg-black-800 backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center px-28">
                <h1 className={Styles.logo}>AlexM. </h1>
                <ul className="flex ml-auto space-x-4 relative">
                    {['/', '#aboutme', '#projects', '#resume', 'https://github.com/empxthy'].map((link, index) => (
                        <li key={index} className="relative group">
                            <a 
                                href={link} 
                                className="text-white transition duration-300 flex items-center"
                                target={link === 'https://github.com/empxthy' ? '_blank' : '_self'}
                                rel={link === 'https://github.com/empxthy' ? 'noopener noreferrer' : undefined}
                            >
                                <FontAwesomeIcon icon={index === 0 ? faHome : index === 1 ? faUser : index === 2 ? faDiagramProject : index === 3 ? faAddressBook : faStar} className="mr-2" />
                                {index === 0 ? 'Home' : index === 1 ? 'About Me' : index === 2 ? 'Projects' : index === 3 ? 'Resume' : 'Star on Github'}
                            </a>
                            <span className="absolute left-0 right-0 h-1 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;