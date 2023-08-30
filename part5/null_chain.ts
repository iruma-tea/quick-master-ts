{
    let hoge: string | null | undefined;
    // let result = (hoge === null || hoge === undefined) ? undefined : hoge.trim();
    // 上記コードはTypeScript3.7以降より以下に書き換えることができる。
    let result = hoge?.trim();
}