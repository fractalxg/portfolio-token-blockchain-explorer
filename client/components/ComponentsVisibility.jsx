const clearContentInputEmpty = () => {
  const inputElement = document.getElementById("search");
  if (inputElement.value == "") {
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

const clearSearchInput = () => {
  const searchInput = document.getElementById("search");
  searchInput.value = "";
  searchInput.focus();
};

export {
  clearSearchInput,
  focusSearchInput,
  handleClearInput,
  clearContentInputEmpty,
};
