import styled from 'styled-components';

export const Button = styled.button`
   {
    display: inline-block;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 3.2rem;
    border-radius: 10rem;
    border: none;
    cursor: pointer;
    font-family: inherit;

    background: ${(props) => (props.primary ? '#223142' : 'white')};
    color: ${(props) => (props.primary ? 'white' : '#354c44')};
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(#222, 0.2);
    }
    &:active {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
      background: #515e6d;
    }
  }
`;

export const Link = styled.a`
   {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 1.6rem;
      transition: all 0.2s;
      padding: 1.6rem 3.2rem;
      border-radius: 10rem;
    }
    &:hover,
    &:active {
      color: var(--color-primary);
    }
  }
`;
