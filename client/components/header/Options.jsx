import "./Options.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Switch from "./Switch";
import { textTranslation, translatedElement } from "../utils/Translation";

const Options = ({ contentText, setContentText }) => {
  const [visibleTheme, setVisibleTheme] = useState(false);
  const [visibleLanguage, setVisibleLanguage] = useState(false);
  const [visibleSelector, setVisibleSelector] = useState(false);
  const [checked, setChecked] = useState(true);

  const [options, setOptions] = useState({
    option: "Options",
    theme: "Theme",
    language: "Language",
    portuguese: "Portuguese",
    english: "English",
  });

  const languageVisibility = () => {
    setVisibleLanguage(!visibleLanguage);
  };

  const themeVisibility = () => {
    setVisibleTheme(!visibleTheme);
  };
  const selectorVisibility = () => {
    setVisibleSelector(!visibleSelector);
  };

  const translatedText = async (source, target) => {
    // const optionKeys = ["option", "theme", "language", "portuguese", "english"];

    // const translations = await Promise.all(
    //   optionKeys.map(async (key) => ({
    //     [key]: await textTranslation(source, target, options[key]),
    //   }))
    // );

    // const optionsText = Object.assign({}, ...translations);

    // setOptions(optionsText);
    const contentTranslatedText = {
      search: await textTranslation(source, target, contentText.search),
      placeholder: await textTranslation(source, target, contentText.placeholder),
      title: await textTranslation(source, target, contentText.title),
      price: await textTranslation(source, target, contentText.price),
      address: await textTranslation(source, target, contentText.address),
    };
    setContentText(contentTranslatedText);

    const optionsText = {
      option: await textTranslation(source, target, options.option),
      theme: await textTranslation(source, target, options.theme),
      language: await textTranslation(source, target, options.language),
      portuguese: await textTranslation(source, target, options.portuguese),
      english: await textTranslation(source, target, options.english),
    };

    setOptions(optionsText);

    // const translations = await Promise.all(
    //   properties.map((prop) => textTranslation(source, target, options[prop]))
    // );

    // setOptions((prevOptions) => ({
    //   ...prevOptions,
    //   ...Object.fromEntries(
    //     properties.map((prop, index) => [prop, translations[index]])
    //   ),
    // }));

    //translatedElement(source, target, "#text");
  };

  // await textTranslation(source, target, options.portuguese)
  return (
    <div className="options-container">
      <p onClick={selectorVisibility} className="options-title">
        {options.option}
        <IoIosArrowDown className="arrow-icon" />
      </p>
      {visibleSelector && (
        <div className="options-selector">
          <p className="theme-title" onClick={themeVisibility}>
            {options.theme}
          </p>
          {visibleTheme && (
            <div className="theme-container">
              <div className="switch-container">
                <Switch setChecked={setChecked} checked={checked} />
              </div>
            </div>
          )}
          <p className="language-title" onClick={languageVisibility}>
            {options.language}
          </p>
          {visibleLanguage && (
            <div className="language-container">
              <p
                onClick={() => translatedText("en", "pt")}
                className="pt-container"
              >
                {options.portuguese}
              </p>
              <p
                onClick={() => translatedText("pt", "en")}
                className="en-container"
              >
                {options.english}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Options;
