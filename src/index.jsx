import React from 'react';
import ReactDom from 'react-dom';

import { Messanger } from 'components/Messanger';
import { Layout } from 'components/Layout';

ReactDom.render(
  <Layout />,
  // <Messanger />,
  document.getElementById('root'),
);
