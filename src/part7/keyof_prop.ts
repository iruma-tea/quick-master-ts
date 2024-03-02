{
    interface Product {
        name: string;
        price: number;
    }

    // function getProp(obj: any, name:string) {
    //     return obj[name];
    // }

    function getProp(obj: Product, name: keyof Product) {
        return obj[name];
    }

    let p = {name: 'お弁当', price: 500};
    console.log(getProp(p, 'name'));
    console.log(getProp(p, 'price'));
}