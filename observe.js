var data = {
    name: 2
}
function observe(data) {
    if(!data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}
function defineReactive(data, key, val) {
    var dep = new Dep()
    observe(val)
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: () => {
            console.log('get-----' + val)
            Dep.target && dep.addSub(Dep.target)
            return val
        },
        set: (newVal) => {
            if(val == newVal) return
            console.log('set----- ', val, ' ---为--- ', newVal)
            val = newVal
            dep.notify()
        }
    })
}

function Dep() {
    this.subs = []
}
Dep.prototype = {
    addSub(sub) {
        this.subs.push(sub)
    },
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
observe(data)
data.name = 'aa'