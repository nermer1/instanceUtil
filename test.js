/* var APP = APP || {};

APP.names = function(str) {
    let parts = str.split("."),
    parent = APP, i;

    if(parts[0] === "APP") {
        parts = parts.slice(1);
    }

    for(i = 0; i < parts.length; ++i) {
        if(typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}

APP.utilities = {
    test: function() {
        console.log("1");
    }
}


var ss = APP.names("APP.utilities");
console.log(ss === APP.utilities);

APP.utilities.array = (function() {
    return {
        a: function() {
            console.log('a');
        },
        b: function() {
            console.log('b');
        }
    }
})(); */


function SandBox() {
    var args = Array.prototype.slice.call(arguments),
    callback = args.pop(),
    modules = (args[0] && typeof args[0] === "string") ? args : args[0], i;

    if(!(this instanceof SandBox)) {
        return new SandBox(modules, callback);
    }

    this.a = 1;
    this.b = 2;

    if(!modules || modules === "*" || modules[0] === "*") {
        modules = [];
        for(i in SandBox.modules) {
            if(SandBox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    for(i = 0; i < modules.length; ++i) {
        SandBox.modules[modules[i]](this);
    }

    callback(this);
}

SandBox.prototype = {
    name: "app",
    version: "1.0.0",
    getName: function() {
        return this.name;
    }
}

SandBox.modules = {};
SandBox.modules.dom = function(box) {
    box.getName = function() {
        console.log("dom");
    }
    box.getStyle = function() {
        console.log("style");
    }
    box.width = 100;
}

SandBox.modules.foo = function(box) {
    box.getAttach = function() {
        console.log('attach');
    }
    box.getDetach = function() {
        console.log('detach');
    }
}

SandBox("foo", function(box) {
    console.log(box.version);
    console.log(box);
});

