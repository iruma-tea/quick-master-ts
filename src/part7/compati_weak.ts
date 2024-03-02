{
    interface MyOption {
        name?: string;
        timeout?: number;
    }

    let obj1 = { hoge: 'TEST' };
    let obj2 = {};
    let obj3 = { name: 'MyApp', hoge: 'TEST' };

    // let c1: MyOption = obj1; // エラー
    let c2: MyOption = obj2;
    let c3: MyOption = obj3;
}