import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyles';
import Hero from './components/layout/hero/Hero';
import NavBar from './components/layout/navigation/NavBar';
import './App.scss';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Hero />
    </Fragment>
  );
}

export default App;
