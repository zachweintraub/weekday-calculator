import {WeekDay} from './../src/calculator.js';

describe('WeekDay', function() {
    it('should return the correct day of the week', function() {
        let testDate = new WeekDay('1998-07-21');
        let result = testDate.dayOfWeek();
        let expected = "Tuesday";
        expect(result).toEqual(expected);
    });
})