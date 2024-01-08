const clearContentInputEmpty = () => {
  const inputElement = document.getElementById("search");
  if (inputElement.value == "") {
    hideContent();
    searchListShowHide("hidden")
  }
};

const hideContent = () => {
  const content = document.getElementById("content");
  if (content) {
    content.style.visibility = "hidden";
  }
};

const searchListShowHide = (visibility) => {
  const searchList = document.getElementById("search-list");
  if (searchList) {
    searchList.style.visibility = visibility;
  }
};

const handleClearInput = () => {
  const inputElement = document.getElementById("search");
  if (inputElement) {
    inputElement.value = "";
  }
};

const focusSearchInput = () => {
  const searchInput = document.getElementById("search");
  searchInput.focus();
};

const showContent = () => {
  const content = document.getElementById("content");
  if (content) {
    content.style.visibility = "visible";
  }
};

const clearSearchInput = () => {
  const searchInput = document.getElementById("search");
  searchInput.value = "";
  searchInput.focus();
};

export {
  clearSearchInput,
  hideContent,
  showContent,
  focusSearchInput,
  handleClearInput,
  searchListShowHide,
  clearContentInputEmpty,
};
