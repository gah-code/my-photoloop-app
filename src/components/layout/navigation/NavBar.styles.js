import styled from 'styled-components';
// import { variant } from 'styled-system';

export const NavButton = styled.a`
   {
    &:link,
    &:visited {
      display: inline-block;
      color: #ffffff;
      border-color: rgba(0, 0, 0, 0);
      border-radius: 100px;
      background-color: var(--color-btn);
      text-decoration: none;
      font-weight: 500;
      font-size: 1.6rem;
      transition: letter-spacing all 0.3s;
      padding: 1.3rem 2.8rem;
      /* background: var(--color-btn); */
    }
    &:hover,
    &:after {
      transform: translateY(-3px);
      background: var(--color-btn-hover);
      box-shadow: 0 1rem 2rem rgba(#333, 0.2);
    }
    &:active,
    &:focus {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba(#333, 0.2);
    }
  }
`;
