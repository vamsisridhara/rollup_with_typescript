import _ from 'underscore';

export class EvenNumbers {
    constructor() { }
    filterdata(): any {
        return _.filter([1, 2, 3, 4, 5, 6], function (num) {
            return num % 2 == 0;
        });
    }
    pluckData(): any {
        var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
        return _.pluck(stooges, 'name');
    }
}