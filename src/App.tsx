import * as React from 'react';
import './App.css';
import { PortfolioPage } from './components/Portfolio/PortfolioPage';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Aaron Fungs Portfolio
        </p>
        <PortfolioPage/>
      </header>
    </div>
  );
};

export default App;
