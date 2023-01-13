import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';

import { navLinks } from '../config/navLinks';
import { useScrollDirection } from '../hooks';
import { navDelay } from '../utils/constants';
import LogoIcon from './icons/LogoIcon';
import Menu from './Menu';

const StyledHeader = styled.header<{
  isScrolledToTop: boolean;
  scrollDirection?: 'up' | 'down';
}>`
  ${({ theme }) => theme.mixins.flexBetween}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  padding-inline: 2rem;
  background-color: var(--alpha-primary-500);
  z-index: 10;
  backdrop-filter: blur(10px);

  ${({ isScrolledToTop, scrollDirection }) => {
    if (scrollDirection === 'up' && !isScrolledToTop) {
      return css`
        height: var(--nav-scroll-height);
        transform: translateY(0);
        background-color: var(--alpha-primary-500);
        box-shadow: 0 10px 30px -10px var(--clr-primary-500);
      `;
    }
  }}

  ${({ isScrolledToTop, scrollDirection }) => {
    if (scrollDirection === 'down' && !isScrolledToTop) {
      return css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(-1 * var(--nav-scroll-height)));
      `;
    }
  }}
  transition: var(--transition);

  @media (min-width: 40em) {
    padding-inline: 4rem;
  }
`;

const StyledNav = styled.nav`
  flex: 1;
  position: relative;
  ${({ theme }) => theme.mixins.flexBetween}

  .logo {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 3rem;
    aspect-ratio: 1;

    svg {
      max-height: 100%;
      max-width: 100%;
    }
  }

  .menu {
    @media (min-width: 40em) {
      display: none;
    }
  }
`;

const StyledLinks = styled.div`
  display: none;

  ol {
    list-style: none;
    padding: 0;
    margin: 0;
    ${({ theme }) => theme.mixins.flexCenter}
    gap: 2rem;
  }

  li > a,
  .resume-button {
    font-family: var(--ff-jakarta);
    font-weight: var(--fw-semi-bold);
    font-size: var(--fz-sm);
    letter-spacing: 0.1rem;
  }

  @media (min-width: 40em) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const Nav = ({ isHome }: { isHome?: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const logoRef = React.createRef<HTMLDivElement>();
  const resumeRef = React.createRef<HTMLDivElement>();
  const timeout = navDelay;
  const fadeClass = 'fade';
  const fadeDownClass = 'fadedown';

  const handleScroll = () => {
    setIsScrolledToTop(window.scrollY < 50);
  };
  useEffect(() => {
    setIsMounted(true);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logo = isHome ? (
    <a href="/" aria-label="Home">
      <LogoIcon />
    </a>
  ) : (
    <Link to="/" aria-label="Home">
      <LogoIcon />
    </Link>
  );

  const resumeButton = (
    <a
      className="btn resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <StyledHeader isScrolledToTop={isScrolledToTop} scrollDirection={scrollDirection}>
      <StyledNav>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition nodeRef={logoRef} classNames={fadeClass} timeout={timeout}>
              <div ref={logoRef} className="logo">
                {logo}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol className="">
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map((link, i) => (
                  <CSSTransition
                    nodeRef={link.ref}
                    key={i}
                    in={isMounted}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      ref={link.ref}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition
                classNames={fadeDownClass}
                nodeRef={resumeRef}
                in={isMounted}
                timeout={timeout}
              >
                <div
                  ref={resumeRef}
                  style={{
                    transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`,
                  }}
                >
                  {resumeButton}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>

        <div className="menu">
          <Menu />
        </div>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
