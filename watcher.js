function Watcher() {
    
}
Watcher.prototype = {
    get: (key) => {
        Dep.target = this
        this.val = data[key]
        Dep.target = null
    }
}