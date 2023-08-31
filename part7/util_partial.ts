{
    interface MyConfig {
        title: string;
        debug: boolean;
    }

    type MyConfigOption = Partial<MyConfig>;
    let conf: MyConfigOption = {}
}