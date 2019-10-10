import React from "react";
import PdfFile from "../../assets/Doumont_Resume.pdf";

const Viewer = ({ width, height }) => (
  <iframe id="PDF" title="PDF" width={width} height={height} src={PdfFile} />
);

export default Viewer;
