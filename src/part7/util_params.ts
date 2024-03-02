{
    function hoge(arg1: string, arg2?: boolean): string | number {
        return 0;
    }

    type TypeP = Parameters<typeof hoge>;
    type TypeR = ReturnType<typeof hoge>;
}