{
    type Type1 = string | number | boolean;
    type NewType1 = Exclude<Type1, string | boolean>;
    type NewType2 = Exclude<Type1, string>;
    type NewType3 = Extract<Type1, string | object>;
    type NewType4 = Extract<Type1, string | boolean>;

    type Type2 = string | number | undefined;
    type NewType5 = NonNullable<Type2>

    type Type3 = string | null | undefined;
    type NewType6 = NonNullable<Type3>;
}