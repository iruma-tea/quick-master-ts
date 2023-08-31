{
    class Hoge { }
    class FooBar extends Hoge { }

    class MyGenerics<T extends Hoge> {
        value!: T;
        getValue(): T {
            return this.value;
        }
    }

    let g = new MyGenerics<FooBar>();
    g.value = new FooBar();
    console.log(g.getValue());
}