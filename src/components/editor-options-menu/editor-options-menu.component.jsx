import React, { useState } from "react";
import { connect } from "react-redux";
import {
  changeTheme,
  changeFont,
  toggleLigatures
} from "../../redux/editor-options/editor-options.actions";
import "./editor-options-menu.styles.scss";

const EditorOptionsMenu = ({
  changeFont,
  changeTheme,
  toggleLigatures,
  width
}) => {
  const initialOptions = {
    Theme: () => {
      setOptionItems(themeOptions);
    },
    Font: () => {
      setOptionItems(fontOptions);
    },
    "Toggle Ligatures": () => {
      toggleLigatures();
    }
  };

  const themeOptions = {
    vs: () => changeTheme("vs"),
    "vs-dark": () => changeTheme("vs-dark"),
    "hc-black": () => changeTheme("hc-black")
  };
  const fontOptions = {
    "Fira Code": () => changeFont("Fira Code"),
    "Ubuntu Mono": () => changeFont("Ubuntu Mono"),
    VT323: () => changeFont("VT323"),
    "Nova Mono": () => changeFont("Nova Mono")
  };

  const [optionItems, setOptionItems] = useState(initialOptions);

  return (
    <div
      className={`editor-options-menu ${width < 860 &&
        "editor-options-menu--small"}`}
    >
      <div className="editor-options-items">
        {Object.keys(optionItems).map(item => (
          <div
            key={item}
            className="editor-option-item"
            onClick={optionItems[item]}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.screen.windowWidth
});

const mapDispatchToProps = dispatch => ({
  changeFont: font => dispatch(changeFont(font)),
  changeTheme: theme => dispatch(changeTheme(theme)),
  toggleLigatures: () => dispatch(toggleLigatures())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorOptionsMenu);
