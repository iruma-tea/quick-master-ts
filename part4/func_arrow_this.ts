{
    let Counter = function (this: any) {
        let _this = this;
        _this.cunt = 0;

        setInterval(function () {
            _this.count++;
        }, 1000);
    };
}