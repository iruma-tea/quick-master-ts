{
    let triangle: (base: number, height: number) => number = function(base: number, height: number) {
        return base * height / 2;
    }

    console.log(triangle(10, 25));
}