import React from 'react';
import { RouteRecord } from 'vite-react-ssg';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: React.lazy(() => import('./App')),
    children: [
      {
        index: true,
        Component: React.lazy(() => import('./pages/Home')),
      },
      {
        path: 'docs',
        Component: React.lazy(() => import('./pages/Documentation')),
      },
      {
        path: 'pricing',
        Component: React.lazy(() => import('./pages/Pricing')),
      },
      {
        path: 'contact',
        Component: React.lazy(() => import('./pages/Contact')),
      },
      {
        path: 'support',
        Component: React.lazy(() => import('./pages/Support')),
      },
      {
        path: 'changelog',
        Component: React.lazy(() => import('./pages/Changelog')),
      },
      {
        path: 'about',
        Component: React.lazy(() => import('./pages/About')),
      },
      {
        path: 'terms',
        Component: React.lazy(() => import('./pages/Terms')),
      },
      {
        path: 'privacy',
        Component: React.lazy(() => import('./pages/Privacy')),
      },
      {
        path: 'refund-policy',
        Component: React.lazy(() => import('./pages/RefundPolicy')),
      },
      {
        path: 'blog',
        Component: React.lazy(() => import('./pages/Blog')),
      },
      {
        path: 'blog/:slug',
        Component: React.lazy(() => import('./pages/BlogPost')),
      },
      {
        path: 'license',
        Component: React.lazy(() => import('./pages/License')),
      },
      {
        path: 'features',
        Component: React.lazy(() => import('./pages/Features')),
      },
    ],
  },
]