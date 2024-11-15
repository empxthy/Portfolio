import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import cv from "../../../assets/files/cv.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PdfViewer: React.FC = () => {
    const [pdfWidth, setPdfWidth] = useState(0);

    const updatePdfWidth = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 640) {
            setPdfWidth(screenWidth * 0.85);
        }
        else if (screenWidth < 1024) {
            setPdfWidth(screenWidth * 0.9);
        }
        else {
            const maxWidth = 450;
            setPdfWidth(Math.min(screenWidth * 0.8, maxWidth));
        }
    };

    useEffect(() => {
        updatePdfWidth();
        window.addEventListener('resize', updatePdfWidth);

        return () => {
            window.removeEventListener('resize', updatePdfWidth);
        };
    }, []);

    return (
        <>
            <div className="absolute z-10 top-24 sm:top-28 left-1/2 transform -translate-x-1/2">
                <button className="bg-pBlue text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 hover:bg-black transition-all duration-300 ease-in-out inline-flex items-center">
                    <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                    </svg>
                    <a download={cv} href={cv} className="text-lg">Download CV</a>
                </button>
            </div>
            <div className="relative mt-20 sm:mt-24 mb-8 sm:mb-0">
                <Document file={cv} renderMode="canvas">
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={pdfWidth} />
                </Document>
            </div>
        </>
    );
};

export default PdfViewer;
