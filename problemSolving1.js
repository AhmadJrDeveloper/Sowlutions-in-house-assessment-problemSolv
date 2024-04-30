function validateEmail(email) {
  let atChar = false;
  let dotChar = false;
  if (email.length > 256) return false;
  email.trim();
  if (email === "") return false;
  for (let i = 0; i < email.length; i++) {
    if (
      email[0] !== "@" &&
      email[email.length - 1] !== "@" &&
      email[i] === "@"
    ) {
      atChar = true;
      let newText = email.split("@")[1];
      // console.log('new text here ', newText)
      for (let j = 1; j < newText.length; j++) {
        if (newText[0] === ".") break;
        else if (newText[j] === ".") {
          dotChar = true;
          break;
        }
      }
    }
  }

  return dotChar && atChar;
}

console.log(validateEmail("ahmad.saad@gmail.com"));
