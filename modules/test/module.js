(function () {
    const info = {
        version: '1.0.0',
        moduleName: 'stringUtil',
        method: {
            test1: function () {
                console.log('test1');
            },
            test2: function () {
                console.log('test2');
            }
        }
    };
    $instanceUtil.module.add(info);
})();
