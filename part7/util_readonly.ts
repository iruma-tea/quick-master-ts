{
    interface Article {
        url: string;
    }

    let a: Readonly<Article> = {
        url: 'https://wings.msn.to/'
    }

    // a.url = 'https://www-web-deli.com/'; // コンパイルエラー
}