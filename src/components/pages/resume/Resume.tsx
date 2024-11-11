import PdfViewer from "../../blocks/PdfBar/Pdfbar";
import NavBar from "../../blocks/Navbar/Navbar";


import styles from './Resume.module.scss';

function Resume() {
    return (
        <>
            <div className={`${styles.footer}`}>
                <NavBar />
                <div className="flex justify-center items-center h-auto sm:h-screen px-4 py-16">
                    <PdfViewer />
                </div>
                <div className="footer flex flex-col md:flex-row items-center justify-center py-6 bg-zinc-800 rounded px-4">
                    <div className="footer__design text-center flex-1 mb-4 md:mb-0">
                        <h1 className="text-1xl text-white">Designed by AlexM.</h1>
                    </div>
                    <div className="footer__copyright text-center flex-1 mb-4 md:mb-0">
                        <h1 className=":text-1xl text-white">Copyright©-∞ AlexM.</h1>
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
            </div>
        </>
    );
}

export default Resume;
