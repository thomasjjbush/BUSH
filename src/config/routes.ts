import { lazy } from 'react';

export const routes = [
    { module: lazy(() => import('./../modules/home/home')), path: '/' },
    { module: lazy(() => import('./../modules/project/project')), path: '/projects/:slug' },
];
