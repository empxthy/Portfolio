import NavBar from "../../blocks/Navbar/Navbar";
import AllTechBlocks from "../../blocks/TechBar/Techbar";

import Programmer from "../../../assets/programmer.png";

import styles from "./About.module.scss";

function AboutMe() {
    return (
        <>
            <NavBar />
            <section className="flex justify-center items-center h-screen px-4">
                <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-6">
                    <div className="home-about-header flex flex-col items-center md:items-start md:w-[70%]">
                        <h1 className="text-2xl sm:text-3xl text-white text-left">Who I'am?</h1>
                        <p className="text-white text-lg sm:text-2xl mt-2">Howdy, Everyone. I'm Alex Mamedov from Tbilisi, Georgia.</p>
                        <p className="text-white text-lg sm:text-2xl">I'm not currently working anywhere.</p>
                        <p className="text-white text-lg sm:text-2xl">I am a math and physics calculus student, as well as a computer engineer and scientist.</p>
                        <p className="text-white text-lg sm:text-2xl mt-2">In addition to programming, I also love:</p>
                        <ul className="mt-2 mx-6">
                            <li className="activity text-white text-base sm:text-lg"><i className="fa-solid fa-hand-point-right"></i> Playing VideoGames.</li>
                            <li className="activity text-white text-base sm:text-lg"><i className="fa-solid fa-hand-point-right"></i> Drinking coffee.</li>
                            <li className="activity text-white text-base sm:text-lg"><i className="fa-solid fa-hand-point-right"></i> Learning something new.</li>
                        </ul>
                        <p className="mt-2 ml-8 sm:ml-32" style={{ color: 'rgb(116, 140, 123)' }}>"Strive to create something new and yourself, too!"</p>
                        <footer className={`${styles.quote_footer} ml-8 sm:ml-64`}> "Alex"</footer>
                    </div>
                    <div className="home-about-icon flex flex-col items-center md:items-end w-full md:w-[30%] mt-6 md:mt-0">
                        <div className="flex justify-center items-center">
                            <img 
                                src={Programmer} 
                                style={{ maxHeight: '250px', maxWidth: '250px' }} 
                                alt="Programmer" 
                                id="boyImage"
                                className="w-3/4 sm:w-1/2 md:w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="skills flex flex-col items-center text-center w-full py-6 px-4">
                <div className="text-center">
                    <h1 className="text-white text-xl sm:text-3xl">
                        Professional <span style={{ color: 'rgb(102, 153, 153)' }}>Skills</span>
                    </h1>
                    <AllTechBlocks />
                </div>
            </div>
            <div className="footer flex flex-col md:flex-row items-center justify-center py-6 bg-zinc-800 px-4">
                <div className="footer__design text-center flex-1 mb-4 md:mb-0">
                    <h1 className="text-sm sm:text-xl text-white">Designed by AlexM.</h1>
                </div>
                <div className="footer__copyright text-center flex-1 mb-4 md:mb-0">
                    <h1 className="text-sm sm:text-xl text-white">Copyright©-∞ AlexM.</h1>
                </div>
                <div className="footer__socialmedia flex-1 text-white mb-4 md:mb-0">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a href="https://twitter.com/emamedovvx"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/empxthy"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://t.me/emamedovvx"><i className="fa-brands fa-telegram"></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/emamedovvx"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
