import React from 'react';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/leads/Dashboard';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <div className="container px-5">
          <Dashboard />
        </div>
      </main>
    </Provider>
  );
};
