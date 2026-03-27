export function Input(placeholder) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.style.padding = "8px";
  return input;
}
