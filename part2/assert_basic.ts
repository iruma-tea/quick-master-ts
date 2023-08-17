{
    function show(result: string) {
        return `結果は${result}です。`;
    }

    // console.log(show(100)) // エラー
    console.log(show(<any>100))
    console.log(show('100' as any))
}