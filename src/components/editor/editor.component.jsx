import React from "react";
import MonacoEditor from "react-monaco-editor";
import { connect } from "react-redux";
import { updateText } from "../../redux/files/files.actions";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";

class Editor extends React.Component {
  editorDidMount(editor, monaco) {}

  onChange = (newValue, e) => {
    this.props.updateText(newValue);
  };
  render() {
    const {
      divider,
      height,
      editorViewerToggle,
      code,
      editorOptions,
      dynamicWidth
    } = this.props;

    const actualWidth =
      editorViewerToggle === "both" ? dynamicWidth / 2 + divider : dynamicWidth;

    const options = {
      selectOnLineNumbers: true,
      fontSize: 15,
      fontLigatures: editorOptions.fontLigatures,
      fontFamily: editorOptions.font,
      wordWrap: "on",
      parameterHints: {
        cycle: "true"
      },
      renderIndentGuides: false
    };

    if (editorViewerToggle === "editor") return null;
    return (
      <MonacoEditor
        width={actualWidth}
        height={height - 73}
        language={editorOptions.langauge}
        theme={editorOptions.theme}
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

const mapStateToProps = state => ({
  code: state.folders.code,
  editorOptions: state.editorOptions,
  height: state.screen.windowHeight,
  editorViewerToggle: state.screen.editorViewerToggle,
  dynamicWidth: selectDynamicWidth(state)
});

const mapDispatchToProps = dispatch => ({
  updateText: code => dispatch(updateText(code))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
