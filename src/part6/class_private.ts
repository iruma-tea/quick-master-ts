{
    class MyClass {
        // プライベートを定義
        #data = 10;
        show(): void {
            console.log(`値は${this.#data}です。`);
        }
    }

    let c = new MyClass();
    c.show();
    // console.log(c.#data); // エラー アクセスできない。
}