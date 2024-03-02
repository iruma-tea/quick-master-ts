{
    interface Article {
        url: string;
    }

    let a:Readonly<Article> = {
        url: 'https://wings.msn.to/'
    };

    // a.url = 'https://www.web-deli.com/'; 読み取り専用なので、コンパイルエラー
}