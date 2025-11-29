import WindowControls from "#components/WindowControls";
import windowWrapper from "#hoc/windowWrapper.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const pdfPath = `${import.meta.env.BASE_URL}files/resume.pdf`;
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);

  let lastTap = 0;

  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setScale((prev) => (prev > 1 ? 1 : 1.6));
    }
    lastTap = now;
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  return (
    <div className="resume-window">
      <div
        id="window-header"
        className="sticky top-0 z-10 flex items-center justify-between px-4 py-3"
      >
        <WindowControls target="resume" />

        <h2 className="text-sm">Resume.pdf</h2>

        <div className="flex items-center gap-3">
          <button onClick={zoomIn} className="icon text-lg">
            +
          </button>
          <button onClick={zoomOut} className="icon text-lg">
            −
          </button>
          <a href={pdfPath} download title="Download resume">
            <Download className="icon" />
          </a>
        </div>
      </div>

      <div className="resume-content">
        <div
          className="pdf-zoom-wrapper"
          style={{ touchAction: "pan-y pinch-zoom" }}
          onTouchEnd={handleDoubleTap}
        >
          <Document
            file={pdfPath}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={index} className="pdf-page-wrapper">
                <Page
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={850}
                />

                <p
                  className="page-number"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Page {index + 1} of {numPages}
                </p>
              </div>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

const ResumeWindow = windowWrapper(Resume, "resume");
export default ResumeWindow;
