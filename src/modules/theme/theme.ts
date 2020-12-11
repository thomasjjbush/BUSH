import { Theme } from '../../types';
import { isWebpSupported } from '../../utils';

const pallette = {
    black: '#080808',
    darkGrey: '#1a1a1a',
    lightGrey: '#eaeaea',
    pink: '#da335c',
    white: '#ffffff',
};

export const initTheme = (darkMode: boolean): Theme => ({
    breakpoints: {
        mobile: 600,
        tabletLandscape: 1025,
        tabletPortrait: 769,
    },
    colors: {
        highlight: darkMode ? pallette.black : pallette.white,
        background: darkMode ? pallette.darkGrey : pallette.white,
        border: pallette.lightGrey,
        brand: pallette.pink,
        offset: darkMode ? pallette.black : pallette.lightGrey,
        text: darkMode ? pallette.white : pallette.black,
    },
    images: {
        logo: {
            pink:
                'https://images.ctfassets.net/e85zpqq4b2pc/6fw1X0NtyqbS5p26FT7sJc/9b16e3c639c6030c3f40e90aea5fb5e6/logo-pink-v2.png',
            white:
                'https://images.ctfassets.net/e85zpqq4b2pc/7FIScBWfqqMSdu5Cq8J99B/373ef358e312947a14bce330fe933ae9/logo-white-v2.png',
        },
        loading:
            'https://images.ctfassets.net/e85zpqq4b2pc/7oqaXxGJ4OYVMunVaJR0qA/bba0a34f6717ce60b3361dd86b0d633f/loading.gif',
    },
    // isWebpSupported: isWebpSupported(),
});
