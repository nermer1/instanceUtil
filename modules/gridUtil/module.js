/**
 * 유니포스트 유니다큐 솔루션 용
 * $u.gridObj.getObj 에 종속 되어있다.
 */
(function () {
    const info = {
        version: '1.0.0',
        moduleName: 'gridUtil',
        method: {
            originalRowIndex: function (gridObj, rowIndex) {
                const ROW_INDEX = gridObj._rg.gridView.getValues(rowIndex);
                return ROW_INDEX['__rowId'];
            },
            deleteSelectedRows: function (gridObj) {
                const gridView = gridObj._rg.gridView;
                const selectedIndexes = gridObj._rg.getCheckedItems();
                const rowIds = selectedIndexes.map((index) => {
                    return gridView.getDataRow(index);
                });
                gridObj._rg.dataProvider.removeRows(rowIds, false);
            }
        }
    };
    $instanceUtil.module.add(info);
})();
