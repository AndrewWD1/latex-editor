import React from "react";
import PdfFile from "../../assets/Doumont_Resume.pdf";

const Viewer = () => (
  <iframe id="PDF" title="PDF" width="800" height="600" src={PdfFile} />
);

export default Viewer;
