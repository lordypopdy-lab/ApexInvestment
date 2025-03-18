document.getElementsByClassName("skiptranslate")[0].style.visibility = "hidden";

document.getElementsByClassName("goog-te-banner-frame")[0].style.visibility =
  "hidden";

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
    },
    "google_translate_element"
  );
}

function changeLanguageByButtonClick() {
  var language = document.getElementById("language").value;
  var selectField = document.querySelector("#google_translate_element select");
  for (var i = 0; i < selectField.children.length; i++) {
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field
    if (option.value == language) {
      selectField.selectedIndex = i;
      // trigger change event afterwards to make google-lib translate this side
      selectField.dispatchEvent(new Event("change"));
      break;
    }
  }
}
