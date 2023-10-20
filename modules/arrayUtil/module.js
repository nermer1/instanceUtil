(function () {
    const info = {
        version: '1.0.0',
        moduleName: 'arrayUtil',
        method: {
            mergeArrays: function (arr1, arr2, key) {
                return arr1.map(function (item1) {
                    const matchingItem = arr2.find((item2) => item2[key] === item1[key]);
                    return matchingItem ? matchingItem : item1;
                });
            }
        }
    };
    $instanceUtil.module.add(info);
})();
