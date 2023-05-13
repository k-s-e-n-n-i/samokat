import React from 'react';
import { ServiceStatic } from '../services/ServiceRedux';

const { Provider: ProjectProvider, Consumer: ProjectConsumer } = React.createContext(ServiceStatic);

export { ProjectProvider, ProjectConsumer };
