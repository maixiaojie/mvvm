const targetStack = [];
function pushTarget(target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = target;
}
function popTarget() {
  Dep.target = targetStack.pop();
}
function Watcher(getters, options = {}) {
  const { computed, watch, callback } = options;
  this.getters = getters;
  this.computed = computed;
  this.watch = watch;
  this.callback = callback;
  this.value = undefined;
  this.get = function () {
    pushTarget(this);
    this.value = this.getters();
    popTarget();
    return this.value;
  };
  if (computed) {
    this.dep = new Dep();
  } else {
    this.get();
  }
}
Watcher.prototype = {
  depend() {
    this.dep.depend();
  },
  update() {
    if (this.computed) {
      // this.get();
      this.dep.notify();
    } else if (this.watch) {
      const oldValue = this.value;
      this.get();
      this.callback(this.value, oldValue);
    } else {
      this.get();
    }
  },
};
