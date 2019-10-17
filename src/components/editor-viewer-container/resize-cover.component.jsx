import React from "react";
import { connect } from "react-redux";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";

/* This element is added t0 cover the viewer iframe 
while resizer is clicked. This must be done because the 
iframe is its on browser windwo and consumes all mouse 
events itself. But if we just left it covered all the 
time, none of the iframes functionality would work
*/

const ResizeCover = ({
  dynamicWidth,
  height,
  foldersToggle,
  resizerClicked,
  moveDivider
}) => {
  if (resizerClicked) {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          height: height - 73,
          width: dynamicWidth,
          left: foldersToggle ? 180 : 0
        }}
        onMouseMove={e => moveDivider(e)}
      ></div>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  dynamicWidth: selectDynamicWidth(state),
  height: state.screen.windowHeight,
  foldersToggle: state.screen.foldersToggle,
  resizerClicked: state.screen.resizerClicked
});

export default connect(mapStateToProps)(ResizeCover);
