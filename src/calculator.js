export class WeekDay {
    constructor(pickedDate) {
        this.date = new Date(pickedDate);
    }

    dayOfWeek() {
        let date = this.date;
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekday[date.getDay()+1];
    }
}