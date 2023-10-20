/**
 * @namespace instanceUtil
 * @version 1.0.0
 *
 
 *
 * 지원: js service 전체
 *
 * 사용법:
 * main.js 로드 $instanceUtil 객체를 이용하여 사용
 * 
 * $instanceUtil.module.modules를 입력하면 사용할 수 있는 유틸 확인
 * 
 * $instanceUtil.tools.join을 이용하면 지정한 객체에 담아서 사용 가능
 * 
 * ex) const util = {util1: function() {}}, $instanceUtil.tools.join(util);
 * 
 *
 */

/**
 *
 *
 */
(function () {
    const config = {
        version: '1.0.0',
        name: 'instanceUtil',
        description: 'unidocu5 plugin, instanceUtil',
        basePath: '/instanceUtil/modules/',
        extraModules: ['test']
    };
    window.$instanceUtil = {};
    $instanceUtil.getConfig = () => config;
    $instanceUtil.setExtraModules = (modules) => {
        if (!Array.isArray(modules)) throw '배열로 입력';
        config['extraModules'] = modules;
    };
    $instanceUtil.setBasePath = (basePath) => {
        if (typeof basePath !== 'string') throw '배열로 입력';
        config['basePath'] = basePath;
    };
    $instanceUtil.init = () => {
        $instanceUtil.module = new $instanceUtil.moduleManager(config.basePath);
        $instanceUtil.module.load();
    };
    $instanceUtil.moduleLoad = (path) => {
        const extraModules = $instanceUtil.getConfig().extraModules;
        extraModules.forEach((module) => $instanceUtil.tools.scriptLoader(path + module));
    };

    /**
     * 여러가지 util
     */
    $instanceUtil.tools = {
        scriptLoader: (src) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src + '/module.js';
            document.head.append(script);

            script.onerror = (error) => console.log('존재하지 않는 모듈: ' + script.src);
        },
        extend: () => {
            var o = arguments[0];
            for (var i = 1; i < arguments.length; ++i) {
                for (var k in arguments[i]) {
                    if (arguments[i].hasOwnProperty(k)) o[k] = arguments[i][k];
                }
            }
            return o;
        },
        join: (o) => {
            setTimeout(function () {
                var t = $instanceUtil.module.modules;
                for (var key in t) {
                    if (!o.hasOwnProperty(key)) o[key] = t[key]['method'];
                    else $instanceUtil.tools.extend(o[key], t[key]['method']);
                }
            }, 1000);
        }
    };

    $instanceUtil.moduleManager = function (path) {
        this.basePath = (/[\\/]/.test(path.substr(-1)) ? path : path + '/') + config.name + '/modules/';
        this.modules = {};
    };
    $instanceUtil.moduleManager.prototype = {
        add: function (data) {
            let name = data['moduleName'],
                module;
            if (this.modules[name]) throw `모듈 ${name}(이/가) 중복 등록 불가`;
            module = this.modules[name] = data || {};
            module.path = this.basePath + name;
        },
        load: function () {
            $instanceUtil.moduleLoad(this.basePath);
        },
        getModule: function (moduleName) {
            if (!this.hasModule(moduleName)) throw `모듈 ${moduleName}(이/가) 존재하지 않음`;
            return this.modules[moduleName]['method'];
        },
        hasModule: function (moduleName) {
            return !!this.modules[moduleName];
        }
    };
})();
