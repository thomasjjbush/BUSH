import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import { initTheme } from './src/modules/theme/theme';
import { mockTheme } from './src/test-utils/mock-theme/mock-theme';

configure({ adapter: new Adapter() });

const theme = mockTheme(initTheme(false));

expect.addSnapshotSerializer(
    createSerializer({
        map: value => {
            if (value.node.type?.componentStyle?.rules) {
                const styles = [
                    ...(value.node.type.componentStyle.baseStyle?.rules ?? []),
                    ...value.node.type.componentStyle.rules.map(rule =>
                        typeof rule === 'string'
                            ? rule
                            : rule({
                                  ...value.props,
                                  theme,
                              }),
                    ),
                ]
                    .join('')
                    .replace(/,(?!\s)/gm, '');

                return { ...value, props: { ...value.props, styles } };
            }
            return value;
        },
    }),
);

jest.mock('styled-components', () => {
    const actual = jest.requireActual('styled-components');
    return {
        __esModule: true,
        createGlobalStyle: actual.createGlobalStyle,
        default: actual.default,
        useTheme: jest.fn(() => theme),
    };
});
