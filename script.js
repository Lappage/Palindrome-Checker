const searchBox = document.getElementById("text-input");
const CheckButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkValue = () => {
  const value = searchBox.value;
  const cleanValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const valueReversed = cleanValue.split("").reverse().join("");

  if (value.trim() === "") {
    alert("Please input a value");
    return;
  }

  if (cleanValue === valueReversed) {
    result.innerHTML = `<p><b>${value}</b> is a palindrome.</p>`;
  } else {
    result.innerHTML = `<p><b>${value}</b> is not a palindrome.</p>`;
  }
};

searchBox.addEventListener("keypress", (buttonPress) => {
  if (buttonPress.key === "Enter") {
    checkValue();
  }
});
