import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.container {
  /* 1140px */
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;
}

.grid {
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
}

.grid:not(:last-child) {
  margin-bottom: 9.6rem;
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}
.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}

.grid--4-cols {
  grid-template-columns: repeat(4, 1fr);
}

.grid--center-v {
  align-items: center;
}

.heading-primary,
.heading-secondary,
.heading-tertiary {
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  font-family: 'Open Sans', sans-serif;
}

.heading-primary {
  font-weight: 700;
  font-size: 5.5rem;
  line-height: 1.05;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
  text-transform: capitalize; 
  color: var(--color-primary);
  z-index:10;
  box-shadow: 0 1.5rem 4rem rgba(#333, 0.7);
  transition: all 0.2s;
}

.heading-secondary {
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.2;
  padding-bottom: 2.5rem;
  &--center { color: var(--color-primary); font-size: 4rem; text-align: center;}
}


//// Helpers
`;

export default GlobalStyle;
