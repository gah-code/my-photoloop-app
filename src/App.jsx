import React, { Fragment } from 'react';
import './styles/style.css';
import GlobalStyle from './theme/globalStyles';

import Hero from './components/layout/hero/Hero';
import Slogan from './components/ui/Slogan';
// import Services from './components/layout/services/Services';
import Gallery from './components/layout/gallery/Gallery';
import Packages from './components/layout/packages/Packages';
import About from './components/layout/about/About';

///// Components

import Accordion from './components/Accordion';

import Footer from './components/layout/footer/Footer';
import './App.scss';

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <Hero />
      <About />

      <Slogan />
      <Gallery />
      {/* <Services /> */}
      <Packages />
      <Accordion />
      {/* <section className='section-gallery'>
        <Packages />
      </section> */}

      {/* <section className='section-sessions'>
        <div className='container'>
          <span className='subheading'>Services</span>
          <h2 className='heading-secondary'>Crafted sessions</h2>
        </div>
      </section> */}
      <Footer />
    </Fragment>
  );
}

export default App;
