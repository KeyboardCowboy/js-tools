/**
 * Returns the ISO week number of the date.
 */
Date.prototype.getWeek = function () {
    const date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);

    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);

    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

/**
 * Set the date to the previous weekday as specified.
 *
 * @param dow
 */
Date.prototype.setLastWeekday = function(dow) {
    dow = dow.toLowerCase().substring(0, 3);
    const dowMap = {'mon': 1, 'tue': 2, 'wed': 3, 'thu': 4, 'fri': 5, 'sat': 6, 'sun': 0};

    // How many days ago was the last day specified?
    const day = this.getDay();
    const diff = day - dowMap[dow];

    if (diff > 0) {
        this.setDate(this.getDate() - diff);
    }
    else {
        this.setDate(this.getDate() - (diff + 7));
    }
}