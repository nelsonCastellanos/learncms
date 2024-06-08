import { Router } from '@vaadin/router';
import './components/HomePage';
import './components/AboutPage';
import './components/NotFoundPage';
import './components/LoginPage';
import './components/ProtectedPage';

const outlet = document.getElementById('outlet');

const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/about', component: 'about-page' },
  { path: '/login', component: 'login-page' },
  { path: '/protected', component: 'protected-page' },
  { path: '(.*)', component: 'not-found-page' },
]);

export { router };
