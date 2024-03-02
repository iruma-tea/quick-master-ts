{
    interface MyConfig {
        title: number;
        debug: boolean;
    }

    type MyConfigOption = Partial<MyConfig>;

    let conf:MyConfigOption = {};
}