class EventEmeitter {
    constructor() {
        this._events = this._events || new Map();
        this.MaxListeners = this.MaxListeners || 10;
    }
}
//监听和触发
EventEmeitter.prototype.$emit = function(type, ...args){
    let haddler = this._events.get(type);
    if(Array.isArray(haddler)){
        haddler.forEach(h=>{
            if(args.length>0){
                h.call(this, args);
            } else {
                h.call(this);
            }
        })
    }
    return true;
}

EventEmeitter.prototype.$on = function(type, fn){
    let haddler = this._events.get(type);
    if(!haddler) {
        this._events.set(type, fn);
    } else if(haddler && typeof haddler === 'function'){
        this._events.set(type, [haddler, fn])
    } else {
        haddler.push(fn)
    }
}
const emitter = new EventEmeitter();
emitter.$on('arson', msg => {
    console.log(`message1:${msg}`)
})
emitter.$on('arson', msg => {
    console.log(`message2:${msg}`)
})
emitter.$emit('arson','from emitter1');