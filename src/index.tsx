import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { ProjectProvider } from './redux/contexts/ProjectProvider';

import service from './redux/store';
import { ServiceStatic } from './redux/services/ServiceRedux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={service}>
    <ProjectProvider value={ServiceStatic}>
      <App />
    </ProjectProvider>
  </Provider>
);
