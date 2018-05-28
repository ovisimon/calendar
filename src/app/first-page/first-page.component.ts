import { Component } from '@angular/core';
import { Month } from '../../model/month';

@Component({
	selector: 'first-page',
	templateUrl: 'first-page.pug',
	styleUrls: [ 'first-page.scss' ]
})

export class FirstPage {
	componentName: string = "FirstPage";
	today: Date = new Date();
	months: Month[] = [];
	dates: Date[] = [];
	number: number;
	country: string;
	holidays: Date[] = [new Date('5/28/2018'), new Date('6/1/2018'), new Date('7/4/2018')];

	makeCalendar(): void {
		this.getDates(this.number);
		this.getMonths();
		this.addDatesToMonths();
		this.addEmptyDates();
	}

	getDates(number: number): void {
		number = this.number;
		this.dates = [];
		for(let i = 1; i <= number; i++) {
			this.dates.push(this.addDays(this.today, i));
		}
	}

	getMonths(): void {
		let today = new Date(this.today);
		let currentMonth = this.getMonthName(today);
		let newMonth: Month = {name: "", dates: [], year: null};
		let newDate: Date;
		newMonth.name = currentMonth;
		newMonth.year = today.getFullYear();
		this.months = [];
		this.months.push(newMonth);
		for(let i = 0; i < this.dates.length; i++) {
			newDate = this.dates[i];
			if(this.getMonthName(newDate) != currentMonth) {
				currentMonth = this.getMonthName(newDate);
				this.months.push({name: currentMonth, dates: [], year: newDate.getFullYear()});
			}
		}
	}

	addDatesToMonths(): void {
		for(let i = 0; i < this.months.length; i++) {
			this.months[i].dates = [];
			for(let j = 0; j < this.dates.length; j++) {
				if(this.months[i].name == this.getMonthName(this.dates[j])) {
					this.months[i].dates.push(this.dates[j]);
				}
			}
		}
	}

	addEmptyDates(): void {
		for(let i = 0; i < this.months.length; i++) {
			let dayOfWeek: number = this.months[i].dates[0].getDay();
			for(let j = 0; j < dayOfWeek; j++) {
				this.months[i].dates.unshift(new Date(null));
			}
			if(this.months[i].dates.length % 7 == 0) {
				continue;
			} else {
				do {
					this.months[i].dates.push(new Date(null));
				} while(!(this.months[i].dates.length % 7 == 0));
			}
		}
	}

	addDays(date: Date, days: number): Date {
		let result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}

	getDateNumber(date: Date): number {
		return date.getDate();
	}

	getMonthName(date: Date): string {
		let monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
		let newMonthName = monthNames[date.getMonth()];
		return newMonthName;
	}

	isHoliday(date: Date): boolean {
		if(this.holidays.includes(date)) {
			return true;
		} else {
			return false;
		}
	}

	getStyle(date: Date): string {
		if(this.isHoliday(date)) {
			return "red";
		}
	}
}
