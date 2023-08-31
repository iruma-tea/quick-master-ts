{
    interface Person {
        name: string;
        age: number;
    }

    function greet(p: Person): void {
        console.log(`こんにちは、${p.name}さん！`);
    }

    let pl = {
        name: 'サクラ',
        age: 2,
        gender: 'famale'
    };

    greet(pl);
}