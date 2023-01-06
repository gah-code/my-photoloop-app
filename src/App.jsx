import React, { Fragment } from 'react';
import './styles/style.css';
import GlobalStyle from './theme/globalStyles';
import Hero from './components/layout/hero/Hero';
import Slogan from './components/ui/Slogan';
import Packages from './components/layout/packages/Packages';
import Services from './components/layout/services/Services';

import './App.scss';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Hero />
      <Slogan />

      <Services />

      <section className='section-gallery'>
        <Packages />
      </section>

      <section className='section-sessions'>
        <div className='container'>
          <span className='subheading'>Services</span>
          <h2 className='heading-secondary'>Crafted sessions</h2>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
