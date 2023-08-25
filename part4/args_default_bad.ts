{
    function showTime(time?: Date): string {
        if (time === undefined) {
            return '現在時刻:' + (new Date()).toLocaleString();
        } else {
            return '現在時刻' + time.toLocaleString();
        }
    }

    console.log(showTime()); //エラー 引数のtime仮引数に?でエラーを回避
}