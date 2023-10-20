/**
 * 가제 untitle.js
 * 
 * initialize
 * - config read
 * - plugin read
 * 
 * config에 설정한 내역 적용
 * config 적용한 플러그인 로그 (플러그인 데이터에 적용 플러그인 체크, 있으면 로드)
 * 
 * scriptload = function() {
 * 
 * }
 * 
 * 
 * plugin load
 * 
 * script load
 * 
 * 
 * 
 */


(function() {
    window.Box || (window.Box = function() {
        var config = {
            extraModules: ["test", "test2"]
        };
        //Box.tools.extend(config, {}).extraModules.map(module => modules.loader.load(module));

        /* function load(module) {
            const script = document.createElement('script');
                script.type = "text/javascript";
                script.src = "modules/" + module + "/module.js";
                document.head.append(script);
        }

        load('test'); */

        return {
            /* init: function(options) {
                // init 사용하지 않음
                return Box.modules.module;
            },
            SandBox: function() {
                // 샌드박스 패턴 여기선 사용하지 않음
                var args = Array.prototype.slice.call(arguments),
                callback = args.pop(),
                modules = (args[0] && typeof args[0] === "string") ? args : args[0], i;
            
                if(!(this instanceof Box.SandBox)) {
                    return new Box.SandBox(modules, callback);
                }
            
                if(!modules || modules === "*" || modules[0] === "*") {
                    modules = [];
                    for(i in Box.SandBox.modules) {
                        if(Box.SandBox.modules.hasOwnProperty(i)) {
                            modules.push(i);
                        }
                    }
                }
            
                for(i = 0; i < modules.length; ++i) {
                    Box.SandBox.modules[modules[i]](this);
                }
            
                callback(this);
            }, */
            getUrl: function(url) {
                -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.basePath + a);
                this.timestamp && "/" != a.charAt(a.length - 1) && !/[&?]t=/.test(a) && (a += (0 <= a.indexOf("?") ? "\x26" : "?") + "t\x3d" + this.timestamp);
                return a;
            }
        }
    }());

    (function() {
        Box.tools = {
            extend: function() {
                var o = arguments[0];
                for (var i = 1; i < arguments.length; ++i) {
                    for (var k in arguments[i]) {
                        if (arguments[i].hasOwnProperty(k))
                            o[k] = arguments[i][k];
                    }
                }
                return o;
            },
            scriptLoader: function(module) {
                const script = document.createElement('script');
                script.type = "text/javascript";
                script.src = "modules/" + module + "/module.js";
                document.head.append(script);
            }
        } 
    }());

    //Box.moduleManager
    Box.moduleManager = function(baseUrl) {
        this.baseUrl = baseUrl;
        //this.fileName = d;
        this.registered = {}
    }
    Box.moduleManager.prototype = {
        put: function(name, option) {
            console.log("모듈 커넥트 완료");
            console.log(this.baseUrl);
            console.log(name, option);

            if (this.registered[a]) throw Error('[CKEDITOR.resourceManager.add] The resource name "' + a + '" is already registered.');
            var b = this.registered[a] = d || {};
            b.name = a;
            b.path = this.getPath(a);
            CKEDITOR.fire(a + CKEDITOR.tools.capitalize(this.fileName) + "Ready", b);
            return this.get(a)
        },
        getPath: function() {
            Box.getUrl(this.baseUrl);
            return CKEDITOR.getUrl(d && d.dir || this.basePath + a + "/")
        },
        load: function() {
            Box.tools.scriptLoader('test');
        }
    }
    Box.modules = new Box.moduleManager("modules/");
    /* Box.modules.module = {}
    Box.modules.module.getModules = {}
    Box.modules.put = function(name, option) {
        Box.modules.module[name] = option.util;
    } */
    
    /* Box.SandBox.prototype = {
        name: "app",
        version: "1.0.0",
        getName: function() {
            return this.name;
        }
    }
    
    Box.SandBox.modules = {}; */

    /* Box.event = {
        CHANGE_EVENT: {
            READY_STATE_CHANGE: "readystatechange"
        },
        addEvent: function(target, event, handler) {
            target.addEventListener(event, handler);
        },
        removeEvent: function(target, event, handler) {
            target.removeEventListener(event, handler);
        },
        eventHandler: {
            readystatechangeHandler: function(e) {
                if(e.target.readyState && e.target.readyState === "complete") {
                    AAA = Box.SandBox(function(box) {
                        return box;
                    });
                    e.target.removeEventListener(Box.event.CHANGE_EVENT.READY_STATE_CHANGE, Box.event.eventHandler.readystatechangeHandler);
                }
            }
        }
    } */

    //Box.event.addEvent(document, Box.event.CHANGE_EVENT.READY_STATE_CHANGE, Box.event.eventHandler.readystatechangeHandler);
})();

/* (function() {
    window.NONAME || (window.NONAME = function() {
        return {
            SandBox: function() {
                var args = Array.prototype.slice.call(arguments),
                callback = args.pop(),
                modules = (args[0] && typeof args[0] === "string") ? args : args[0], i;
        
                console.log(SandBox);
                if(!(this instanceof SandBox)) {
                    return new NONAME(modules, callback);
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
        }
    }());

    NONAME.SandBox.prototype = {
        name: "app",
        version: "1.0.0",
        getName: function() {
            return this.name;
        }
    }
    
    NONAME.SandBox.modules = {};
    NONAME.SandBox.modules.dom = function(box) {
        box.getName = function() {
            console.log("dom");
        }
        box.getStyle = function() {
            console.log("style");
        }
        box.width = 100;
    }
    
    NONAME.SandBox.modules.foo = function(box) {
        box.getAttach = function() {
            console.log('attach');
        }
        box.getDetach = function() {
            console.log('detach');
        }
    }
    
    NONAME.SandBox("foo", function(box) {
        console.log(box.version);
        console.log(box);
    });
}()); */


/* (function() {
    window.UNTITLE || (window.UNTITLE = function () {
        return {
            version: "2.0.0",
            init: function() {

            },
            names: function(str) {
                let parts = str.split(","),
                parent = UNTITLE, i;

                if(parts[0] === "UNTITLE") {
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
        }
    }());

    let config = {
        extraPlugins: "",
        removePlugins: ""
    };

    let kiki = {
        config: {

        },
        utils: {
            util: {
                extend: function() {
                    var o = arguments[0];
                    for (var i = 1; i < arguments.length; ++i) {
                        for (var k in arguments[i]) {
                            if (arguments[i].hasOwnProperty(k))
                                o[k] = arguments[i][k];
                        }
                    }
                    return o;
                }
            }
        }
    };

    UNTITLE.tools = {
        extend: function() {
            var o = arguments[0];
            for (var i = 1; i < arguments.length; ++i) {
                for (var k in arguments[i]) {
                    if (arguments[i].hasOwnProperty(k))
                        o[k] = arguments[i][k];
                }
            }
            return o;
        }
    };

    UNTITLE.resourceManager = function (path, name) {
        this.basePath = path;
        this.fileName = name;
        this.registered = {};
    };

    UNTITLE.resourceManager.prototype = {
        put: function(name, option) {
            if (this.registered[name]) throw Error(`${name}은/는 존재합니다.`);
            var b = this.registered[name] = option || {};
            //b.name = name;
            //b.path = this.getPath(name);
            return this.get(name);
        },
        get: function (name) {
            return this.registered[name] || null;
        },
        getPath: function (name) {
            var d = this.externals[name];
            return UNTITLE.getUrl(d && d.dir || this.basePath + name + "/");
        }
    }

    UNTITLE.modules = new UNTITLE.resourceManager("modules/", "module");
    UNTITLE.script = {
        load: function() {
            const script = document.createElement('script');
            script.type = "text/javascript";
            script.src = 'modules/test/module.js';
            document.head.appendChild(script);
        }
    }

    UNTITLE.script.load();
}()); */


/* function SandBox() {
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
}); */