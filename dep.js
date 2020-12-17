function Dep(key) {
  this.key = key;
  this.deps = new Set();
}
Dep.prototype = {
  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target);
    }
  },
  notify() {
    this.deps.forEach((watcher) => watcher.update());
  },
};
// 正在进行的watcher
Dep.target = null;
