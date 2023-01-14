import { createGlobalStyle } from 'styled-components';

import { variables } from './';
import TransitionStyles from './transitions';

const GlobalStyles = createGlobalStyle`
  // https://piccalil.li/blog/a-modern-css-reset

  ${() => variables}
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  #root {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: var(--ff-poppins);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    background-color: var(--clr-primary-400);
    color: var(--clr-slate-200);
  }

  body{
    &.blur{
      overflow: hidden;
      main {
        filter: blur(10px);
      }
    }
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 .75rem 0;
    font-weight: 600;
    line-height: 1.1;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }

  a{
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--clr-secondary-400);
    }

    button{
      color: inherit;
      background-color: inherit;
      border: none;
    }
  }

  .btn {
    position: relative;
    display: inline-block;
    text-decoration: none;
    border: 1px solid var(--clr-secondary-400);
    padding: 0.75em 1.1em;
    border-radius: var(--border-radius);
    background-color: inherit;
    color: var(--clr-secondary-400);
    z-index: 1;
    ::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: var(--shadow-secondary-400);
      opacity: 0;
      transition: var(--transition);
    }

    &:hover,
    &:focus {
      &::before {
        opacity: 1;
      }
    }
  }

  .text-title{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    font-family: var(--ff-prea);
    font-size: var(--fz-heading);
    color: var(--clr-neutral-100);

    @media (min-width: 40em) {
      flex-direction: row;
    }

    &::after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: var(--shadow-secondary-400);
      @media (min-width: 40em){
        flex: 1;
        margin-left: 2rem;
        /* width: unset; */
      }
    }
  }

  section{
    margin-bottom: 3rem;
  }


  ${() => TransitionStyles}


  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
