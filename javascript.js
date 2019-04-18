let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setDayMonthYear=function (day,month,year) {
        this.day=day;
        this.month=month;
        this.year=year;
    };
    this.getDayMonthYear=function () {
        return this.day+"/"+this.month+"/"+this.year;
    }
    
};
let date = new myDate(12, 4, 2019);
let day= date.getDay();
let month = date.getMonth();
let year = date.getYear();
date.setDay(1);
date.setMonth(2);
date.setYear(2019);
date.setDayMonthYear(20,20,2019);
console.log(date.getDayMonthYear());