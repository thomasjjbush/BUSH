import { initTheme } from '../../modules/theme/theme';
import { Theme } from '../../types';

export const mockTheme = (object = initTheme(false), predecessor = 'theme'): Theme =>
    Object.keys(object).reduce((acc, key) => {
        const string = `${predecessor}.${key}`;
        return {
            ...acc,
            [key]: typeof (object as any)[key] === 'object' ? mockTheme((object as any)[key], string) : string,
        };
    }, {} as Theme);
