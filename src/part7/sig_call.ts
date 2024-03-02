{
    interface Calculate {
        (x: number, y: number): number;
    }

    let add: Calculate = function(a:number, b:number): number {
        return a + b;
    }

    console.log(add(1, 5));
}