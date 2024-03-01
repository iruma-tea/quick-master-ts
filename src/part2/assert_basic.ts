{
    function show(result: string) {
        return `結果は${result}です。`;
    }

    // 数値型で渡すとエラー
    // console.log(show(100));
    // any型に変換
    console.log(show(<any>100));
    // asでも変換可能
    console.log(show(100 as any));
}