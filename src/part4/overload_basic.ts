{
    function show(value: number): void;
    function show(value: boolean): void;
    function show(value: any): void {
        // number型の場合
        if (typeof value === 'number') {
            console.log(value.toFixed(0));
        } else {
            console.log(value ? '真':'偽');
        }
    }

    show(10.358);
    show(false);
    // show('ほげ'); // 結果：エラー
}