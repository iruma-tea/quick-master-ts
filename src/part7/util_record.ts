{
    interface ContentInfo {
        url: string;
        title: string;
        count: number;
    }

    let mySite:Record<'top' | 'contact' | 'about', ContentInfo> = {
        top: {url: 'index.php', title: 'トップ', count: 100},
        contact: {url: 'mail.php', title: '問い合わせ', count: 150},
        about: {url: 'me.php', title: '概要', count: 108}
    };
}