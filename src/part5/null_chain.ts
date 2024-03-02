{
    let hoge: string | null | undefined;
    //let result = (hoge === null || hoge === undefined) ? undefined : hoge.trim();
    let result = hoge?.trim();

    console.log((hoge !== null && hoge !== undefined) ? hoge : 'X');
    console.log(hoge ?? 'X');
}