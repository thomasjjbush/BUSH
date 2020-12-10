import { hexToRGB } from './color';

describe('hexToRGB', () => {
    it('should return the correct rgba value based on the provided hex and default alpha to 1', () => {
        expect(hexToRGB('#ffffff')).toBe('rgba(255,255,255,1)');
    });

    it('should return the correct rgba value based on the provided hex and alpha', () => {
        expect(hexToRGB('#000000', 0.7)).toBe('rgba(0,0,0,0.7)');
    });
});
