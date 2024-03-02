{
    class Person {
        protected name: string;
        protected age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        show(): string {
            return `${this.name}は${this.age}歳です。`;
        }
    }

    class BusinessPerson extends Person {
        protected clazz: string;

        constructor(name: string, age: number, clazz: string) {
            super(name, age);
            this.clazz = clazz;
        }

        show(): string {
            return super.show() + `${this.clazz}です。`
        }

        work(): string {
            return `${this.name}はテキパキ働きます。`;
        }
    }

    let p = new BusinessPerson('理央', 30, '主任');
    console.log(p.show());
    console.log(p.work());
}