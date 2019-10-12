import React from "react";
import MonacoEditor from "react-monaco-editor";
import { connect } from "react-redux";
import { updateText } from "../../redux/files/files.actions";

class Editor extends React.Component {
  editorDidMount(editor, monaco) {}

  onChange = (newValue, e) => {
    this.props.updateText(newValue);
  };
  render() {
    const options = {
      selectOnLineNumbers: true,
      fontSize: 15,
      fontLigatures: this.props.editorOptions.fontLigatures,
      fontFamily: this.props.editorOptions.font,
      wordWrap: "on",
      parameterHints: {
        cycle: "true"
      },
      renderIndentGuides: false
    };
    return (
      <MonacoEditor
        width={this.props.width}
        height={this.props.height}
        language={this.props.editorOptions.langauge}
        theme={this.props.editorOptions.theme}
        value={this.props.code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

const mapStateToProps = state => ({
  code: state.folders.code,
  editorOptions: state.editorOptions
});

const mapDispatchToProps = dispatch => ({
  updateText: code => dispatch(updateText(code))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
