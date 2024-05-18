import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    console.log(firstDayOfTheMonth);
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}
export function getCurrentMonth(month = dayjs().month()) {
    month = Math.floor(month);
    let day = dayjs().day();
    let date = 1
    const dateDay = new Array(dayjs().daysInMonth()).fill(null).map(() => {
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        if (day === 7) day = 0
        return {
            date: date++,
            day: weekDays[day++]
        }
    })
    return dateDay
}