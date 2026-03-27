export function Alert(message) {
  const div = document.createElement("div");
  div.innerText = message;
  div.style.background = "red";
  div.style.color = "white";
  div.style.padding = "10px";
  return div;
}
