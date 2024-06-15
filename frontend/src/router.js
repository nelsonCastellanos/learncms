import { Router } from '@vaadin/router';
import {authGuard} from "./services/auth";
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
    path: '/protected',
    component: 'protected-page',
    action: async (context, commands) => {
      if (authGuard(context, commands)) {
        return authGuard(context, commands);
      }
      await import('./pages/ProtectedPage.js');
    }
  },
  {
    path: '/catalog',
    component: 'catalog-page',
    action: async (context, commands) => {
      if (authGuard(context, commands)) {
        return authGuard(context, commands);
      }
      await import('./pages/CatalogPage.js');
    }
  },
  {
    path: '/read/:bookId/:sectionId',
    component: 'read-page',
    action: async (context, commands) => {
      if (authGuard(context, commands)) {
        return authGuard(context, commands);
      }
      await import('./pages/ReadPage.js');
    }
  },
  {
    path: '/section/:bookId',
    component: 'section-page',
    action: async (context, commands) => {
      if (authGuard(context, commands)) {
        return authGuard(context, commands);
      }
      await import('./pages/SectionPage.js');
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
