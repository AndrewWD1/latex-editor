import React, { useState } from "react";
import { connect } from "react-redux";
import {
  changeLangauge,
  changeTheme,
  changeFont,
  toggleLigatures
} from "../../redux/editor-options/editor-options.actions";
import "./editor-options-menu.styles.scss";

const EditorOptionsMenu = ({
  changeLangauge,
  changeFont,
  changeTheme,
  toggleLigatures
}) => {
  const initialOptions = {
    Language: () => {
      setOptionItems(langaugeOptions);
    },
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
  const langaugeOptions = {
    Latex: () => changeLangauge("latex"),
    JavaScript: () => changeLangauge("javascript"),
    Python: () => changeLangauge("python")
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
    <div className="editor-options-menu">
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

const mapDispatchToProps = dispatch => ({
  changeLangauge: langauge => dispatch(changeLangauge(langauge)),
  changeFont: font => dispatch(changeFont(font)),
  changeTheme: theme => dispatch(changeTheme(theme)),
  toggleLigatures: () => dispatch(toggleLigatures())
});

export default connect(
  null,
  mapDispatchToProps
)(EditorOptionsMenu);
