function Compile(el, vm) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    if (this.$el) {
        this.$fragment = this.node2fragment(this.$el)
    }
    this.init()
    this.$el.appendChild(this.$fragment)
}

Compile.prototype = {
    init: function() {
        this.compileElement(this.$fragment)
    },
    compileElement: function(el){
        console.log(el)
        var childNodes = el.childNodes, me = this;
        [].slice.call(childNodes).forEach(node => {
            console.log(node)
            var text = node.textContent
            if(me.isElementNode(node)) {
                console.log(node.childNodes)
            }
        })
    },
    isElementNode: (el) => {
        return el.nodeType == 1
    },
    node2fragment: (el) => {
        var fragment = document.createDocumentFragment(), child;
        while(child = el.firstChild) {
            fragment.append(child)
        }
        return fragment
    }

}

new Compile('#app')