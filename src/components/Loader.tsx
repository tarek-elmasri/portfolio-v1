import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import LogoIcon from './icons/LogoIcon';

const StyledLoader = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .logo {
    position: relative;
    z-index: 1;
    padding: 1rem;
    transition: transform 500ms var(--easing);

    > svg {
      max-width: 5rem;
      max-height: 5rem;
    }

    path {
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      transition: all 2000ms linear;
    }

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: 10px;
      box-shadow: 0 0 100px 10px var(--clr-secondary-400);
      opacity: 0;
      transition: opacity 3000ms var(--easing);
    }
  }

  .logo-enter-active {
    path {
      stroke-dashoffset: 0;
    }

    ::before {
      opacity: 1;
    }
  }

  .logo-enter-done {
    transform: scale(0);
  }
`;

const Loader: React.FC<{ onFinishLoading: () => void }> = ({ onFinishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const logoRef = React.createRef<HTMLDivElement>();
  const timeout = 4000;

  useEffect(() => {
    setIsMounted(true);
    const finishLoading = setTimeout(() => onFinishLoading(), timeout + 1000);
    return () => {
      clearTimeout(finishLoading);
    };
  }, []);

  return (
    <StyledLoader>
      <CSSTransition
        nodeRef={logoRef}
        classNames={'logo'}
        in={isMounted}
        timeout={timeout}
      >
        <div ref={logoRef} className="logo">
          <LogoIcon />
        </div>
      </CSSTransition>
    </StyledLoader>
  );
};

export default Loader;
