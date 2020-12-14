import { MockTheme, Theme } from '../../types';

export const mockTheme = (object: MockTheme<MockTheme>, predecessor = 'theme'): Theme =>
    Object.keys(object).reduce((acc, key) => {
        const string = `${predecessor}.${key}`;
        return {
            ...acc,
            [key]: typeof object[key] === 'object' ? mockTheme(object[key], string) : string,
        };
    }, {} as Theme);
