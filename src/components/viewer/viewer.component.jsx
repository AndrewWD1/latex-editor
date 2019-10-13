import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectPDFLink } from "../../redux/files/files.selectors";

const Viewer = ({ width, height, pdfLink }) => {
  return (
    <iframe
      allow-same-origin
      id="PDF"
      title="PDF"
      width={width}
      height={height}
      src={""}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  pdfLink: selectPDFLink(ownProps.folder, ownProps.file)(state)
});

export default connect(mapStateToProps)(Viewer);
