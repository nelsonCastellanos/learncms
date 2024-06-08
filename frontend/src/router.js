import { Router } from '@vaadin/router';
const outlet = document.getElementById('outlet');

const router = new Router(outlet);
router.setRoutes([
  {
    path: '/',
    component: 'home-page',
    action: async () => {
      await import('./pages/HomePage');
    }
  },
  {
    path: '/login',
    component: 'login-page',
    action: async () => {
      await import('./pages/LoginPage');
    }
  },
  {
    path: '/protected',
    component: 'protected-page',
    action: async () => {
      await import('./pages/ProtectedPage');
    }
  },
  {
    path: '(.*)',
    component: 'not-found-page',
    action: async () => {
      await import('./pages/NotFoundPage');
    }
  }
]);

export { router };
