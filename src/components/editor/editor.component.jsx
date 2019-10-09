import React from "react";
import MonacoEditor from "react-monaco-editor";
import { connect } from "react-redux";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  editorDidMount(editor, monaco) {
    editor.focus();
  }
  onChange = (newValue, e) => {
    console.log("onChange", newValue, e);
  };
  render() {
    const code = this.props.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

const mapStateToProps = state => ({
  code: state.text.code
});

export default connect(mapStateToProps)(Editor);
