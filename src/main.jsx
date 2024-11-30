import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import { DataProvider } from './components/DataContext';
import { UserProvider } from './contexts/UserContext';
import { DashboardProvider } from './contexts/DashboardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <DashboardProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </DashboardProvider>
    </UserProvider>
  </React.StrictMode>
);
