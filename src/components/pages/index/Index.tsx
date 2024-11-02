import Typewriter from "typewriter-effect";
import NavBar from "../../blocks/Navbar/Navbar";
import styles from './index.module.scss';

function Index() {
    return (
        <div className={styles.App}>
            <NavBar />
            <section>
                <div className={styles.home}>
                    <div className="container">
                        <div className="home-header flex flex-col items-start h-screen px-32 py-48">
                            <h1 className="text-white text-center text-3xl mb-4">Howdy, Everyone!<span className={styles.wave}>👋🏼</span></h1>
                            <h1 className="text-white text-center text-3xl">
                                It's Alex Mamedov🥥
                            </h1>
                            <div className="mt-24 text-left">
                                <div className="Typewritter">
                                    <span className="Typewritter__wrapper text-white text-3xl">
                                        <Typewriter 
                                            options={{
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
                <div className={styles.about}>
                    <div className="container">
                        <div className="home-about-header flex flex-col items-start px-32 py-48">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;