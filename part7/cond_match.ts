{
    type ReturnedType<T> = T extends (...args: any[]) => infer R ? R : T;
}