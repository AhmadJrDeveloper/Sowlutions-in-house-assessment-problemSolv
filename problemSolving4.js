function isValidBracketSequence(text) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  text.trim();
  if (text === "") return false;
  let stack = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(" || text[i] === "{" || text[i] === "[")
      stack.push(text[i]);
    else if (stack[stack.length - 1] === map[text[i]]) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}
console.log(isValidBracketSequence("()[]{}"));
