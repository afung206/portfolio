import * as React from 'react';
import { FunctionComponent } from 'react';
import './App.scss';
import { PortfolioPage } from './components/Portfolio/PortfolioPage';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {'Aaron Fung\'s Portfolio'}
        </p>
      </header>
      <PortfolioPage/>
    </div>
  );
};

export default App;
