{
    interface Product {
        name: string;
        price: number;
    }

    type NameType = Product['name'];
    type NamePriceType = Product['name' | 'price'];
    // type HogeType = Product['hoge']; // エラー
}