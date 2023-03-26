// Define the characters to use in the CAPTCHA
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Define the length of the CAPTCHA
const length = 6;

// Generate a random string of characters of the specified length
function generateCaptcha() {
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

// Display the generated CAPTCHA in the preview div
function displayCaptcha() {
  const captchaPreview = document.querySelector(".preview");
  const captcha = generateCaptcha();
  captchaPreview.textContent = captcha;
  return captcha;
}

// Refresh the CAPTCHA preview and input field
function refreshCaptcha() {
  const captchaInput = document.querySelector("#captcha-input");
  captchaInput.value = "";
  displayCaptcha();
}

// Add event listener to refresh button to refresh the CAPTCHA
const captchaRefreshBtn = document.querySelector(".captcha-refresh");
captchaRefreshBtn.addEventListener("click", refreshCaptcha);

// Add event listener to the login button to validate the CAPTCHA
const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", function () {
  const captchaInput = document.querySelector("#captcha-input");
  const captchaPreview = document.querySelector(".preview");
  const captcha = captchaPreview.textContent;
  const userInput = captchaInput.value;
  if (userInput === captcha) {
    alert("CAPTCHA validation successful! Logging in...");
  } else {
    alert("CAPTCHA validation failed! Please try again.");
    refreshCaptcha();
  }
});

// Display the initial CAPTCHA
displayCaptcha();
