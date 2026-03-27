export function Button(text) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.style.padding = "10px";
  btn.style.background = "blue";
  btn.style.color = "white";
  return btn;
}
