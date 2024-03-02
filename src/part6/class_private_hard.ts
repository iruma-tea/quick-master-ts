{
    class MyClass {
        // private data = 10;
        #data = 10;
    }

    let c = new MyClass();
    // console.log(c.data); // エラー
    // console.log(c["data"]); // 見える
    // console.log(c.#data); // エラー
    // console.log(c['#data']); // #のプライベート変数はアクセス不可　エラー
}