import { LayoutRedux } from 'containers/LayoutContainer';
import { Profile } from 'components/Profile';

import { AboutPage } from 'pages/AboutPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: LayoutRedux,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: LayoutRedux,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  }
];

export { routes };
