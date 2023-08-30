{
    class MyClass {
        // private data = 10;
        #data = 10;
    }

    let c = new MyClass();
    // console.log(c.data); // エラー
    // console.log(c['#data']); //#dataの場合もエラー
}
