import React from "react";
import MonacoEditor from "react-monaco-editor";
import { connect } from "react-redux";
import { updateText } from "../../redux/text/text.actions";

class Editor extends React.Component {
  editorDidMount(editor, monaco) {
    /**
     * ! Change monaco editor options here!!!!!!
     */
    //monaco.editor.setTheme("vs-dark");
  }

  onChange = (newValue, e) => {
    this.props.updateText(newValue);
  };
  render() {
    const code = this.props.code;
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
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

const mapStateToProps = state => ({
  code: state.text.code,
  editorOptions: state.editorOptions
});

const mapDispatchToProps = dispatch => ({
  updateText: code => dispatch(updateText(code))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
