import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import { App } from './App';
import { componentsReady, PorscheDesignSystemProvider } from '@porsche-design-system/components-react';

ReactDOM.render(
  <StrictMode>
    <Router>
      <PorscheDesignSystemProvider>
        <App />
      </PorscheDesignSystemProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

(window as any).componentsReady = componentsReady;
