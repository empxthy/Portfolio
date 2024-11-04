import Typewriter from "typewriter-effect";
import NavBar from "../../blocks/Navbar/Navbar";
import styles from './index.module.scss';


import Programmer from "../../../assets/programmer.png";
import Boy from "../../../assets/boy.png";

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
        if(img) {
            img.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div className={styles.App}>
            <NavBar />
            <section>
                <div className="home" style={{ maxHeight: '80%' }}>
                    <div className="container">
                        <div className="home-header flex flex-col items-start h-screen px-4 sm:px-16 md:px-32 py-48 relative">
                            <h1 className="text-white text-center text-2xl sm:text-3xl mb-4">Howdy, Everyone!<span className={styles.wave}>👋🏼</span></h1>
                            <h1 className="text-white text-center text-2xl sm:text-3xl">It's Alex Mamedov🥥</h1>
                            <img src={Programmer} alt="" className="hidden md:block" style={{ position: 'absolute', right: '5%', top: '25%' }} />
                            <div className="mt-24 text-left">
                                <div className="Typewritter">
                                    <span className="Typewritter__wrapper text-white text-xl sm:text-3xl">
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
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="home-about-header flex flex-col items-start text-left w-full md:w-[60%] p-8 px-4 md:px-32">
                            <h1 className="top-0 p-0 m-0 text-3xl mb-8">Let me introduce myself</h1>
                            <p className="mb-5">When I was 11 years old I fell in love with programming. That's how my story began😁.</p>
                            <p className="mb-5">I am fluent in classics like: <strong>Python, JavaScript(TypeScript), C#.</strong></p>
                            <p className="mb-5">My focus is new Web development and products, as well as Web3, Blockchain(TON Network).</p>
                            <p>I use technologies such as Node JS and advanced Javascript Frameworks such as React JS, Next JS, Vue JS.</p>
                        </div>
                        <div className="home-about-icon flex flex-col items-center md:items-end px-8 md:px-32 w-full md:w-[40%] p-8">
                            <div className={styles.willChange} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} onTouchMove={handleMouse} onTouchEnd={handleMouseLeave}>
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
                            {['twitter', 'github', 'telegram', 'instagram'].map(platform => (
                                <li key={platform} className="mx-2">
                                    <a href={`https://${platform}.com/emamedovvx`} target="__blank">
                                        <i className={`fa-brands fa-${platform} p-2 bg-${platform === 'twitter' ? 'blue-500' : platform === 'github' ? 'gray-800' : platform === 'telegram' ? 'blue-600' : 'pink-500'} text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-${platform === 'twitter' ? 'blue' : platform === 'github' ? 'gray' : platform === 'telegram' ? 'blue' : 'pink'}-300 cursor-pointer`}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <div className="footer relative flex flex-col md:flex-row items-center bg-zinc-800 py-4 px-4 md:px-32">
                <div className="footer__design flex-1">
                    <h1 className="text-1xl text-white">Designed by AlexM.</h1>
                </div>
                <div className="footer__copyright text-center flex-1">
                    <h1 className="text-1xl text-white">Copyright©-∞ AlexM.</h1>
                </div>
                <div className="footer__socialmedia flex-1">
                    <ul className="flex flex-row justify-center md:justify-end">
                        {['twitter', 'github', 'telegram', 'instagram'].map(platform => (
                            <li key={platform} className="mx-2">
                                <a href={`https://${platform}.com/emamedovvx`} target="__blank"><i className={`fa-brands fa-${platform} cursor-pointer`}></i></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;