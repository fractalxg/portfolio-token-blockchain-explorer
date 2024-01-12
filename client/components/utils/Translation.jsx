import axios from "axios";

const textTranslation = async (sourceLanguage, targetLanguage, text) => {
  const TRANSLATE_SERVER = import.meta.env.VITE_TRANSLATE_API_SERVER;

  const translationData = {
    text: text,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
  };

  try {
    const response = await axios.post(TRANSLATE_SERVER, translationData);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from translation.", error);
  }
};

const translatedElement = async (source, target, element) => {
	const elements = document.querySelectorAll(element);

	if (elements.length > 0) {
		elements.forEach(async (element) => {
			try {
				const translatedText = await textTranslation(
					source,
					target,
					element.innerHTML
				);
				element.innerHTML = translatedText;
			} catch (error) {
				console.error("Error translating text:", error);
			}
		});
	} else {
		console.error("No elements found");
	}
};

export { textTranslation, translatedElement };
