import { Month } from '../../model/month';
export declare class FirstPage {
    componentName: string;
    today: Date;
    months: Month[];
    dates: Date[];
    number: number;
    country: string;
    holidays: Date[];
    makeCalendar(): void;
    getDates(number: number): void;
    getMonths(): void;
    addDatesToMonths(): void;
    addEmptyDates(): void;
    addDays(date: Date, days: number): Date;
    getDateNumber(date: Date): number;
    getMonthName(date: Date): string;
    isHoliday(date: Date): boolean;
    getStyle(date: Date): string;
}
