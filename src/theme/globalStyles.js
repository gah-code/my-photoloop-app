import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
  font-family: 'Aleo', serif;
  line-height: 1.7;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  background: var(--color-background);
 }
 
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  /* scroll-behavior: smooth; */
}
p,
li,
h1,
h2,
h3,
h4 {
  // Help prevent overflow of long words/names/URLs
  word-break: break-word;

  // Optional, not supported for all languages:
  hyphens: auto;

  // Clear top margin
  margin-top: 0;
}

// Button Styling Resets
a.button {
  text-decoration: none;
}

// Reset default button styles
button.button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }
}

// Flex alignment comes in handy should you add icons in the future, or impose width restrictions.

a.button,
button.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // Visual
  // ... existing styles
  // background-color: $btnColor;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);

  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    // box-shadow: 0 0 0 4px scale-color($btnColor, $lightness: -40%);
  }
}

button {
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1;
  background: transparent;
  -webkit-appearance: none;
}

button,
fieldset,
input,
legend,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
 --color-background: rgb(255, 255, 255);
 --color-background-shade: #fceec2;
 --color-primary: #263649;

 --color-secondary: #fbdba2;

 --color-btn: #fd736c;
 --color-btn-hover: #fd817b;
}

// font-family: 'Open Sans', sans-serif;
// font-family: 'Aleo', serif;

.heading-primary,
.heading-secondary,
.heading-tertiary {
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  font-family: 'Open Sans', sans-serif;
}

.heading-primary {
  ${'' /* text-transform: uppercase; */}
  font-weight: 700;
  font-size: 5.5rem;
  line-height: 1.05;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
  text-transform: capitalize; 
  color: var(--color-primary);

  box-shadow: 0 1.5rem 4rem rgba(#333, 0.7);

  transition: all 0.2s;
}

.heading-secondary {
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.2;
}`;

export default GlobalStyle;
