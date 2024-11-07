import Typewriter from "typewriter-effect";
import NavBar from "../../blocks/Navbar/Navbar";
import Boy from "../../../assets/boy.png";

import styles from './index.module.scss';

function Index() {
    const handleMouse = (e: React.MouseEvent | React.TouchEvent) => {
        const img = document.getElementById('boyImage') as HTMLImageElement;
        const offsetX = 'touches' in e ? e.touches[0].clientX : e.nativeEvent.offsetX;
        const offsetY = 'touches' in e ? e.touches[0].clientY : e.nativeEvent.offsetY;
        const targetElement = e.currentTarget as HTMLElement;
        const clientWidth = targetElement.clientWidth;
        const clientHeight = targetElement.clientHeight;

        const x = (offsetX / clientWidth - 0.5) * 30;
        const y = (offsetY / clientHeight - 0.5) * -30;

        if (img) {
            img.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        }
    };

    const handleMouseLeave = () => {
        const img = document.getElementById('boyImage');
        if (img) {
            img.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <>
            <NavBar />
            <section className="flex justify-center items-center h-screen">
                <div className="home text-center">
                    <div className="home-header flex flex-col items-center justify-center h-full">
                        <h1 className="text-white text-2xl">Howdy, Everyone!<span className={styles.wave}>👋🏼</span></h1>
                        <h1 className="text-white text-2xl">It's Alex Mamedov🥥</h1>
                        <div className="mt-24">
                            <div className="Typewritter">
                                <span className="Typewritter__wrapper text-white text-xl">
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
            </section>
            <div className="about flex flex-col items-center text-center w-full py-12">
                <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-6">
                    <div className="home-about-header flex flex-col items-center md:items-start md:w-[60%]">
                        <h1 className="text-3xl text-white">Let me introduce myself</h1>
                        <p className="text-white text-left mb-1">When I was 11 years old I fell in love with programming. That's how my story began😁.</p>
                        <p className="text-white text-left mb-1">I am fluent in classics like: <strong>Python, JavaScript(TypeScript), C#.</strong></p>
                        <p className="text-white text-left mb-1">My focus is new Web development and products, as well as Web3, Blockchain(TON Network).</p>
                        <p className="text-white text-left mb-1">I use technologies such as Node JS and advanced Javascript Frameworks such as React JS, Next JS, Vue JS.</p>
                    </div>
                    <div className="home-about-icon flex flex-col items-center md:items-end w-full md:w-[40%]">
                        <div 
                            onMouseMove={handleMouse} 
                            onMouseLeave={handleMouseLeave} 
                            onTouchMove={handleMouse} 
                            onTouchEnd={handleMouseLeave}
                            className="flex justify-center items-center"
                        >
                            <img 
                                src={Boy} 
                                style={{ maxHeight: '200px', maxWidth: '200px', transition: 'transform 0.2s', transformStyle: 'preserve-3d' }} 
                                alt="Boy" 
                                id="boyImage"
                            />
                        </div>
                    </div>
                </div>
                <div className="home-about-socialmedia text-center mt-12">
                    <h1 className="text-3xl text-white">FIND ME ON</h1>
                    <p className="text-white">I'm glad to see you.</p>
                    <ul className="flex justify-center space-x-6 mt-12">
                        <li>
                            <a href="https://x.com/emamedovvx" target="__blank">
                                <i className="fa-brands fa-twitter p-2 bg-blue-500 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-300 cursor-pointer"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/empxthy" target="__blank">
                                <i className="fa-brands fa-github p-2 bg-gray-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-300 cursor-pointer"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/emamedovvx" target="__blank">
                                <i className="fa-brands fa-telegram p-2 bg-blue-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400 cursor-pointer"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/emamedovvx/" target="__blank">
                                <i className="fa-brands fa-instagram p-2 bg-pink-500 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-300 cursor-pointer"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer flex flex-col md:flex-row items-center justify-center py-6 bg-zinc-800 rounded">
                <div className="footer__design text-center flex-1">
                    <h1 className="text-1xl text-white">Designed by AlexM.</h1>
                </div>
                <div className="footer__copyright text-center flex-1">
                    <h1 className="text-1xl text-white">Copyright©-∞ AlexM.</h1>
                </div>
                <div className="footer__socialmedia flex-1 text-white">
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

export default Index;
