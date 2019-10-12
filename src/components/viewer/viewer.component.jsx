import React from "react";
import { connect } from "react-redux";
import { selectPDFLink } from "../../redux/files/files.selectors";

const Viewer = ({ width, height, pdfLink }) => {
  return (
    <iframe id="PDF" title="PDF" width={width} height={height} src={pdfLink} />
  );
};

const mapStateToProps = (state, ownProps) => ({
  pdfLink: selectPDFLink(ownProps.folder, ownProps.file)(state)
});

export default connect(mapStateToProps)(Viewer);
