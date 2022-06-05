import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* RESET PADRÃO */
  :root{
  --white: #fff;
  
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-300: #00B37E;
  --green-500: #00875f;

  --red-500: #F75A68;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  }

  html{
    @media (max-width: 768px) {
    font-size:87.5%
  }
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: var(--gray-900);
    color: var(--gray-300);
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight:  400;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  :focus{
    outline: transparent;
    box-shadow: 0 0 0 2px var(--green-500);
  }
/* RESET PADRÃO */
`;
