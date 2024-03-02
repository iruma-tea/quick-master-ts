{
    function process(value: string | number) {
        if (typeof value === "string") {
            return value.toUpperCase();
        } else {
            return value.toFixed(1);
        }
    }
}