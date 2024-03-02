{
    interface Person {
        readonly name: string;
        age?: number;
    }

    let p: Person = {
        name: '田中太郎',
    };

    // p.name = '鈴木三郎'; // エラー、読み取り専用プロパティへの代入は不可。
}