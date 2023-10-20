## instanceUtil

유틸 확장

---

### 사용 방법


1. 다운받은 소스 압축 해제 후 vendorCustom 경로에 복사 또는 이동

2. $uPlugins.js 추가
```javascript
//$uPlugins.js "vendorCustom/plugins/$uPlugins" 경로에 생성 후 소스 작성
define(['vendorCustom/plugins/instanceUtil/main'], function () {
    const basePath = '/webjars/vendorCustom/plugins/';
    const plugins = {};
    $u.plugins = {};

    $u.plugins.init = function() {
        $u.plugins.getPlugin('instanceUtil').setBasePath(basePath);
        $u.plugins.getPlugin('instanceUtil').setExtraModules(['gridUtil', 'arrayUtil']);
        $u.plugins.getPlugin('instanceUtil').tools.join($u);

        Object.keys(plugins).forEach(function(pluginName) {
            if(typeof plugins[pluginName]['init'] !== 'function') throw '플러그인 [' + pluginName + '] 초기화할 수 없습니다.';
            plugins[pluginName]['init'].call(this);
        });
    }

    $u.plugins.hasPlugin = function(pluginName) {
        return plugins.hasOwnProperty(pluginName);
    }

    $u.plugins.getPlugin = function(pluginName) {
        if(!pluginName) return plugins;
        if($u.plugins.hasPlugin(pluginName)) return plugins[pluginName];
        else throw '등록되지 않은 플러그인';
    }

    $u.plugins.addPlugin = function(pluginName, pluginFn) {
        if($u.plugins.hasPlugin(pluginName)) throw '이미 등록된 플러그인';
        if(!pluginFn) throw '존재하지 않는 플러그인';
        plugins[pluginName] = pluginFn;
    }

    $u.plugins.addPlugin("instanceUtil", $instanceUtil);
});
```

3. customize.js 파일 수정
```javascript
//customize.js 모듈 호출
define(['vendorCustom/plugins/$uPlugins'], function () {
    // ...원래 로직 가장 아래 함수 실행
    $u.plugins.init();
});
```
