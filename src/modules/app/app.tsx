import React, { FunctionComponent, ReactElement, Suspense, useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Icon, Loading, Nav } from '../../components';
import { Global } from '../theme/global';
import { initTheme } from '../theme/theme';
import { routes } from './../../config/';
import { StyledToggle } from './app.style';
import { Icons } from '../../types';
import { client, GraphQLContext } from '../../utils';

export const App: FunctionComponent = (): ReactElement => {
    const [darkMode, setDarkMode] = useState(true);
    const theme = useMemo(() => initTheme(darkMode), [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <GraphQLContext.Provider value={client}>
                <Global />
                <Router>
                    <Nav />
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            {routes.map(({ path, module: Module }) => (
                                <Route exact key={path} path={path}>
                                    <Module />
                                </Route>
                            ))}
                        </Switch>
                    </Suspense>
                    <aside>
                        <StyledToggle
                            aria-label={`Enable ${darkMode ? 'light' : 'dark'} mode`}
                            data-test-id="contrast-button"
                            onClick={(): void => setDarkMode(!darkMode)}
                        >
                            <Icon color={theme.colors.text} icon={Icons.CONTRAST} size={50} />
                        </StyledToggle>
                    </aside>
                </Router>
            </GraphQLContext.Provider>
        </ThemeProvider>
    );
};
