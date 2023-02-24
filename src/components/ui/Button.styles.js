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

    margin-right: 5px;

    background: ${(props) => (props.primary ? '#B8D8BA' : '#fd736c')};
    color: ${(props) => (props.primary ? 'white' : 'white')};
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
