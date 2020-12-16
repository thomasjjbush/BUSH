import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount, ReactWrapper } from 'enzyme';
import { mockStore } from '../../test-utils/mock-store/mock-store';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../test-utils/mock-theme/mock-theme';
import { initTheme } from '../../modules/theme/theme';
import { Store } from '../../types';

const client = {
    logo: {
        url: 'client-logo-url',
    },
    name: 'client-name',
    primaryColor: 'client-primaryColor',
    slug: 'client-slug',
    url: 'client-url',
};

const project = {
    description: 'project-description',
    hero: {
        url: 'project-hero-url',
    },
    client,
    gallery: {
        isLandScape: false,
        total: 1,
        items: [
            {
                url: 'project-gallery-0-url',
            },
        ],
    },
    name: 'project-name',
    primaryTag: { name: 'primary-tag-name', slug: 'primary-tag-slug' },
    responsibilities: {
        items: [
            {
                description: 'responsibility-description',
                icon: 'responsibility-icon',
                name: 'responsibility-name',
            },
        ],
    },
    slug: 'project-slug',
    tags: { items: [{ name: 'tag-name', slug: 'tag-slug' }] },
    thumbnail: {
        name: 'x',
        url: 'project-thumbnail-url',
    },
    year: 1970,
};

const defaultState: Store = {
    clients: [client],
    employment: [
        {
            companyName: 'company',
            endDate: new Date(null).toDateString(),
            location: { lat: 'lat', lon: 'lon' },
            responsibilities: 'responsibilities',
            startDate: new Date(null).toDateString(),
            title: 'title',
            url: 'url',
        },
    ],
    project: {
        item: project,
        sameClient: [project],
        sameTag: [project],
    },
    projects: {
        items: [project],
        total: 10,
    },
    tags: [{ name: 'tag-name', slug: 'tag-slug' }],
};

export const renderModule = (Component: FunctionComponent, overrides = {}): ReactWrapper =>
    mount(
        <Provider store={mockStore({ ...defaultState, ...overrides })}>
            <ThemeProvider theme={mockTheme(initTheme(false, true) as any)}>
                <Router history={createMemoryHistory()}>
                    <Component />
                </Router>
            </ThemeProvider>
        </Provider>,
    );
