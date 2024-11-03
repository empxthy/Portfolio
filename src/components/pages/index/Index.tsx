import Typewriter from "typewriter-effect";
import NavBar from "../../blocks/Navbar/Navbar";
import styles from './index.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

import Programmer from "../../../assets/programmer.png";
import Boy from "../../../assets/boy.png";

function Index() {
    const handleMouse = (e) => {
        const img = document.getElementById('boyImage');
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;

        const x = (offsetX / clientWidth - 0.5) * 30;
        const y = (offsetY / clientHeight - 0.5) * -30;

        img.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    const handleMouseLeave = () => {
        const img = document.getElementById('boyImage');
        img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className={styles.App}>
            <NavBar />
            <section>
                <div className="home" style={{ maxHeight: '80%' }}>
                    <div className="container">
                        <div className="home-header flex flex-col items-start h-screen px-32 py-48 relative">
                            <h1 className="text-white text-center text-3xl mb-4">Howdy, Everyone!<span className={styles.wave}>👋🏼</span></h1>
                            <h1 className="text-white text-center text-3xl">
                                It's Alex Mamedov🥥
                            </h1>
                            <img src={Programmer} alt="" style={{ position: 'absolute', right: '250px', top: '25%' }} />
                            <div className="mt-24 text-left">
                                <div className="Typewritter">
                                    <span className="Typewritter__wrapper text-white text-3xl">
                                        <Typewriter 
                                            options={{
                                                autoStart: true,
                                                loop: true
                                            }}
                                            onInit={(typewriter) => {
                                                    typewriter
                                                    .typeString("TON Mini APP Developer")
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .pauseFor(500)
                                                    .typeString("Software Engineer")
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .pauseFor(500)
                                                    .typeString("Open Source")
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .start();
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about flex flex-col w-full">
                    <div className="flex w-full">
                        <div className="home-about-header flex flex-col items-start text-left w-[60%] p-8 px-32">
                            <h1 className="top-0 p-0 m-0 text-3xl mb-8">Let me introduce myself</h1>
                            <p className="mb-5">When I was 11 years old I fell in love with programming. That's how my story began😁.</p>
                            <p className="mb-5">I am fluent in classics like: <strong>Python, JavaScript(TypeScript), C#.</strong></p>
                            <p className="mb-5">My focus is new Web development and products, as well as Web3, Blockchain(TON Network).</p>
                            <p>I use technologies such as Node JS and advanced Javascript Frameworks such as React JS, Next JS, Vue JS.</p>
                        </div>
                        <div className="home-about-icon flex flex-col items-end px-32 w-[40%] p-8">
                            <div className={styles.willChange} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
                                <img 
                                    src={Boy} 
                                    style={{ maxHeight: '200px', maxWidth: '200px', transition: 'transform 0.2s', transformStyle: 'preserve-3d' }} 
                                    alt="" 
                                    className="transition-transform duration-300 ease-in-out transform" 
                                    id="boyImage"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="home-about-socialmedia flex flex-col justify-center mt-8">
                        <h1 className="text-3xl">FIND ME ON</h1>
                        <p className="mt-2">I'm glad to see you.</p>
                        <ul className="flex flex-row justify-center mt-12 mb-12">
                            <li className="mx-2">
                                <a href="https://x.com/emamedovvx" target="__blank"><i className="fa-brands fa-twitter p-2 bg-blue-500 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-300 cursor-pointer"></i></a>
                            </li>
                            <li className="mx-2">
                                <a href="https://github.com/empxthy" target="__blank"><i className="fa-brands fa-github p-2 bg-gray-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-300 cursor-pointer"></i></a>
                            </li>
                            <li className="mx-2">
                                <a href="https://t.me/emamedovvx" target="__blank"><i className="fa-brands fa-telegram p-2 bg-blue-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400 cursor-pointer"></i></a>
                            </li>
                            <li className="mx-2">
                                <a href="https://www.instagram.com/emamedovvx/" target="__blank"><i className="fa-brands fa-instagram p-2 bg-pink-500 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-300 cursor-pointer"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="footer relative flex flex-row items-center bg-zinc-800 py-4 px-32">
                <div className="footer__design flex-1">
                    <h1 className="text-1xl text-white">Designed by AlexM.</h1>
                </div>
                <div className="footer__copyright text-center flex-1">
                    <h1 className="text-1xl text-white">Copyright©-∞ AlexM.</h1>
                </div>
                <div className="footer__socialmedia flex-1">
                    <ul className="flex flex-row justify-end">
                        <li className="mx-2">
                            <a href="https://x.com/emamedovvx" target="__blank"><i className="fa-brands fa-twitter cursor-pointer"></i></a>
                        </li>
                        <li className="mx-2">
                            <a href="https://github.com/empxthy" target="__blank"><i className="fa-brands fa-github cursor-pointer"></i></a>
                        </li>
                        <li className="mx-2">
                            <a href="https://t.me/emamedovvx" target="__blank"><i className="fa-brands fa-telegram cursor-pointer"></i></a>
                        </li>
                        <li className="mx-2">
                            <a href="https://www.instagram.com/emamedovvx/" target="__blank"><i className="fa-brands fa-instagram cursor-pointer"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;