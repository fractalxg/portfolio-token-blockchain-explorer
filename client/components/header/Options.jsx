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
    const optionsTextArray = {
      option: options.option,
      theme: options.theme,
      language: options.language,
      portuguese: options.portuguese,
      english: options.english,
    };

    const contentTextArray = {
      search: contentText.search,
      placeholder: contentText.placeholder,
      title: contentText.title,
      price: contentText.price,
      address: contentText.address,
    };

    const combinedString = Object.values(optionsTextArray)
      .concat(Object.values(contentTextArray))
      .join(", ");
    console.log(combinedString)
    const combinedTranslatedText = await textTranslation(
      source,
      target,
      combinedString
    );
    console.log(combinedTranslatedText)
    const translatedArray = combinedTranslatedText.split(", ");
    console.log(translatedArray)
    Object.keys(optionsTextArray).forEach((key, index) => {
      optionsTextArray[key] = translatedArray[index];
    });

    Object.keys(contentTextArray).forEach((key, index) => {
      contentTextArray[key] =
        translatedArray[index + Object.keys(optionsTextArray).length];
    });

    setOptions(optionsTextArray);
    setContentText(contentTextArray);
  };

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
