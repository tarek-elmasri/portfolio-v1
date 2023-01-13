import { css } from 'styled-components';

const variables = css`
  :root {
    --clr-primary-200: hsl(218 41% 23%);
    --clr-primary-300: hsl(218 58% 16%);
    --clr-primary-400: hsl(216 65% 11%);
    --clr-primary-500: hsl(216 86% 6%);
    --shadow-primary-500: hsl(216 86% 6% / 0.7);

    --clr-slate-200: hsl(226 70% 88%);
    --clr-slate-300: hsl(225 31% 74%);
    --clr-slate-400: hsl(225 20% 61%);
    --clr-slate-500: hsl(220 21% 36%);

    --clr-neutral-100: hsl(0 0% 100%);

    --clr-secondary-400: hsl(166 100% 70%);
    --shadow-secondary-400: hsl(166 100% 70% / 0.1);

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --ff-prea: 'Preahvihear', sans-serif;
    --ff-poppins: 'Poppins', sans-serif;
    --ff-jakarta: 'Plus Jakarta Sans', sans-serif;

    --fz-xxs: 0.75rem;
    --fz-xs: 0.8125rem;
    --fz-sm: 0.875rem;
    --fz-md: 1rem;
    --fz-lg: 1.125rem;
    --fz-xl: 1.25rem;
    --fz-xxl: 1.375rem;
    --fz-heading: 2rem;

    --fw-semi-bold: 600;
    --fw-bold: 800;

    --border-radius: 4px;

    --nav-height: 6.25rem;
    --nav-scroll-height: 4.375rem;

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
