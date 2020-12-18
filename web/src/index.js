// import "./index.css"
function component() {
  const el = document.createElement("div");
  el.innerHTML = "helloo";
  return el;
}

class Math {
  // @log
  add(a, b) {
    return a + b;
  }
}
function log(target, name, descriptor) {
  console.log(target, name, descriptor);
}
const math = new Math();

document.body.appendChild(component());
