const rangeChar = document.getElementById("range-char");
const numberChar = document.getElementById("number-char");
const displayPassword = document.getElementById("password-display");
const formPassword = document.getElementById("password-form");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const uppercaseEl = document.getElementById("uppercase");
const charCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const uppercaseCharCodes = arrayLowToHigh(65, 90);
const symbolCharCodes = arrayLowToHigh(9, 47).concat(58, 126);
rangeChar.addEventListener("input", syncValue);
numberChar.addEventListener("input", syncValue);
function syncValue(e) {
  const valueAmount = e.target.value;
  rangeChar.value = valueAmount;
  numberChar.value = valueAmount;
}
function createPassword(a, b, c, d) {
  let charAmountCodesLowercase = charCodes;
  b &&
    (charAmountCodesLowercase =
      charAmountCodesLowercase.concat(numberCharCodes));
  c &&
    (charAmountCodesLowercase =
      charAmountCodesLowercase.concat(symbolCharCodes));
  d &&
    (charAmountCodesLowercase =
      charAmountCodesLowercase.concat(uppercaseCharCodes));
  const passwordRender = [];
  for (let h = 0; h < a; h++) {
    let characterCodes =
      charAmountCodesLowercase[
        Math.floor(Math.random() * charAmountCodesLowercase.length)
      ];
    passwordRender.push(String.fromCharCode(characterCodes));
  }
  return passwordRender.join("");
}
formPassword.addEventListener("submit", (e) => {
  e.preventDefault();
  const charAmount = numberChar.value;
  const includeNumber = numberEl.checked;
  const includeSymbol = symbolEl.checked;
  const includeUppercase = uppercaseEl.checked;
  const password = createPassword(
    charAmount,
    includeNumber,
    includeSymbol,
    includeUppercase
  );
  displayPassword.innerText = password;
});
function arrayLowToHigh(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
