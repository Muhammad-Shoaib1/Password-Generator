const passwordBox = document.getElementById("Password");
const notificationBox = document.getElementById("notification");
const upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const specialCharacters = '(){}[]|`¬¦!£$%^&*<>:;#~_-+=,@"';
const length = 12;
const combo = upperCaseValues + lowerCaseValues + num + specialCharacters;

function generatePassword() {
  let password = "";
  password += upperCaseValues[Math.floor(Math.random() * upperCaseValues.length)];
  password += lowerCaseValues[Math.floor(Math.random() * lowerCaseValues.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (password.length < length) {
    password += combo[Math.floor(Math.random() * combo.length)];
  }

  passwordBox.value = password;
  showNotification('Password generated successfully!', 'success');
}

function copyPassword() {
  if (passwordBox.value) {
    passwordBox.select();
    document.execCommand("copy");
    showNotification('Password copied to clipboard!', 'success');
  } else {
    showNotification('No password to copy.', 'error');
  }
}

function showNotification(message, type) {
  notificationBox.textContent = message;
  notificationBox.className = `notification show ${type}`;
  setTimeout(() => {
    notificationBox.className = `notification`;
  }, 3000);
}
