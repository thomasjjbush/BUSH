import { getMonthAndYear } from './time-and-date';

describe('getMonthAndYear', () => {
    it('should return undefined if date argument resolves to false', () => {
        expect(getMonthAndYear(undefined)).toBe(undefined);
    });

    it('should return correct month and year if a Date class is provided', () => {
        expect(getMonthAndYear(new Date(null))).toBe('Jan 1970');
    });

    it('should return correct month and year if a Date string is provided', () => {
        expect(getMonthAndYear(new Date(null).toString())).toBe('Jan 1970');
    });
});
