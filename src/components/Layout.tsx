import React, { useEffect, useState } from 'react';
import { Location } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '../styles';
import Footer from './Footer';
import Loader from './Loader';
import Nav from './Nav';

const StyledContent = styled.main`
  padding-inline: 2rem;
  width: min(160rem, 100%);
  margin-inline: auto;

  @media (min-width: 40em) {
    padding-inline: 8rem;
  }
`;

const Layout: React.FC<React.PropsWithChildren<{ location: Location }>> = ({
  location,
  children,
}) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(true); //useState(isHome);

  useEffect(() => {
    if (isLoading) return;

    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView();
        el?.focus();
      }, 0);
    }
  }, [isLoading]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isLoading && isHome ? (
        <Loader onFinishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Nav isHome={isHome} />
          <StyledContent>{children}</StyledContent>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default Layout;
