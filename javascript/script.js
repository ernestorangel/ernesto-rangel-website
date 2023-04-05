let userLang = navigator.language || navigator.userLanguage;
let langSelector = document.getElementById('lang-selector');

window.addEventListener('load', () => {
  setLanguage(userLang);

  langSelector.addEventListener('input', () => {
    setLanguage(langSelector.value);
  });
});

function setLanguage(langCode) {
  fetch(`../lang/${langCode}.json`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function setLanguageSelector(langCode) {}
