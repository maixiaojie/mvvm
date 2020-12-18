class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
}

const math = new Math();
math.add(2, 4);
