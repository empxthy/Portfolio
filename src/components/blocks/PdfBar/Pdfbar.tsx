import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import cv from "../../../assets/files/cv.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PdfViewer: React.FC = () => {
    return(
        <>
            <div className="absolute top-[95px] left-1/2 transform -translate-x-1/2 z-10">
                <a 
                    href={cv} 
                    download="cv.pdf" 
                    className="px-4 py-2 bg-white text-black border border-black rounded-md m-2 hover:bg-black hover:text-white hover:shadow-lg transition duration-200 ease-in-out"
                >
                    Download CV
                </a>
            </div>
            <div className="relative mt-[430px] block">
                <Document file={cv} renderMode="canvas">
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={500} />
                </Document>
            </div>
            <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 z-10">
                <a
                    href={cv}
                    download="cv.pdf"
                    className="px-4 py-2 bg-white text-black border border-black rounded-md m-2 hover:bg-black hover:text-white hover:shadow-lg transition duration-200 ease-in-out"
                >
                    Download CV
                </a>
            </div>
        </>
    )
}

export default PdfViewer;