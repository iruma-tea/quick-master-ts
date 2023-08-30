{
    let data: unknown = 10;
    data = 'Hoge';
    data = [true, false, true];

    let str: unknown = 'Hoge';
    if (typeof str === 'string') {
        console.log(str.trim());
    }
}