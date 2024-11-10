import PdfViewer from "../../blocks/PdfBar/Pdfbar";
import NavBar from "../../blocks/Navbar/Navbar";

import styles from './Resume.module.scss';

function Resume() {
    return (
        <>
        <div className={`${styles.footer}`}>
            <NavBar />
            <section className="flex justify-center items-center h-screen px-4">
                <PdfViewer />
            </section>
            <div className={`footer flex flex-col md:flex-row items-center justify-center py-6 mt-96 bg-zinc-800 rounded`}>
                <div className="footer__design text-center flex-1">
                    <h1 className="text-1xl text-white">Designed by AlexM.</h1>
                </div>
                <div className="footer__copyright text-center flex-1">
                    <h1 className="text-1xl text-white">Copyright©-∞ AlexM.</h1>
                </div>
                <div className="footer__socialmedia flex-1 text-white">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a href="https://twitter.com/emamedovvx">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/empxthy">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/emamedovvx">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/emamedovvx">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Resume;
