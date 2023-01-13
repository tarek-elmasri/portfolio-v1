import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { navLinks } from '../config/navLinks';
import { useOnClickOutside } from '../hooks';
import { KEY_CODES } from '../utils/constants';

const StyledHamburgerButton = styled.button<{ isMenuOpen: boolean }>`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  z-index: 11;
  margin-right: -15px;
  padding: 15px;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--clr-secondary-400);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.isMenuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.isMenuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) =>
        props.isMenuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--clr-secondary-400);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.isMenuOpen ? `100%` : `120%`)};
      top: ${(props) => (props.isMenuOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.isMenuOpen ? 0 : 1)};
      transition: ${({ isMenuOpen }) =>
        isMenuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${(props) => (props.isMenuOpen ? `100%` : `80%`)};
      bottom: ${(props) => (props.isMenuOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.isMenuOpen ? `-90deg` : `0`)});
      transition: ${({ isMenuOpen }) =>
        isMenuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)'};
    }
  }
`;

const StyledSidebar = styled.aside<{ isMenuOpen: boolean }>`
  @media (min-width: 40em) {
    display: none;
  }

  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0;
  background-color: var(--clr-primary-300);
  box-shadow: -10px 0px 30px -15px var(--shadow-primary-500);

  z-index: 9;
  transform: translateX(${(props) => (props.isMenuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.isMenuOpen ? 'visible' : 'hidden')};
  transition: var(--transition);

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--clr-slate-200);
    text-align: center;
    width: 100%;
    padding: 3px 20px 20px;
    font-family: var(--ff-jakarta);
    font-weight: var(--fw-semi-bold);
    letter-spacing: 0.1rem;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      position: relative;
      margin: 0 auto 1.25rem;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
    }
    a {
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-button {
    padding-inline: 3rem;
  }
`;

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  let menuFocusables: (HTMLElement | null)[];
  let firstFocusableEl: HTMLElement | null;
  let lastFocusableEl: HTMLElement | null;

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from(navRef.current?.querySelectorAll('a') || []),
    ];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e: KeyboardEvent) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl?.focus();
    }
  };

  const handleForwardTab = (e: KeyboardEvent) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl?.focus();
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setIsMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e: UIEvent) => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const wrapperRef = React.createRef<HTMLDivElement>();
  useOnClickOutside(wrapperRef, () => setIsMenuOpen(false));

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (!body) return;
    isMenuOpen ? body.classList.add('blur') : body.classList.remove('blur');
  }, [isMenuOpen]);

  return (
    <div ref={wrapperRef}>
      <StyledHamburgerButton
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div className="ham-box">
          <div className="ham-box-inner" />
        </div>
      </StyledHamburgerButton>

      <StyledSidebar
        isMenuOpen={isMenuOpen}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 1 : -1}
      >
        <nav ref={navRef}>
          {navLinks && (
            <ol>
              {navLinks.map(({ url, label }, i) => (
                <li key={i}>
                  <Link to={url}>
                    <button onClick={() => setIsMenuOpen(false)}>{label}</button>
                  </Link>
                </li>
              ))}
            </ol>
          )}

          <a href="/resume.pdf" className="btn resume-button">
            Resume
          </a>
        </nav>
      </StyledSidebar>
    </div>
  );
};

export default Menu;
