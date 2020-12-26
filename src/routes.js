import { Layout } from 'components/Layout';
import { Profile } from 'components/Profile';

import { AboutPage } from 'pages/AboutPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: Layout,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: Layout,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  }
];

export { routes };
