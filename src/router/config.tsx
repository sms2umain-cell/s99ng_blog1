import { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const SportsBettingPage = lazy(() => import('../pages/sports-betting/page'));
const SlotGamesPage = lazy(() => import('../pages/slot-games/page'));
const LiveCasinoPage = lazy(() => import('../pages/live-casino/page'));
const GameTipsPage = lazy(() => import('../pages/game-tips/page'));
const BeginnerGuidePage = lazy(() => import('../pages/beginner-guide/page'));
const ArticlePage = lazy(() => import('../pages/article/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sports-betting',
    element: <SportsBettingPage />,
  },
  {
    path: '/slot-games',
    element: <SlotGamesPage />,
  },
  {
    path: '/live-casino',
    element: <LiveCasinoPage />,
  },
  {
    path: '/game-tips-strategy',
    element: <GameTipsPage />,
  },
  {
    path: '/game-tips',
    element: <Navigate to="/game-tips-strategy" replace />,
  },
  {
    path: '/beginner-guide',
    element: <BeginnerGuidePage />,
  },
  {
    path: '/article/:slug',
    element: <ArticlePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;