import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';

import { sidesDelay } from '../utils/constants';

type SideProps = {
  oriantation: 'right' | 'left';
};

const StyledSide = styled.div<SideProps>`
  display: none;
  @media (min-width: 40em) {
    display: block;
    position: fixed;
    bottom: 0;
    ${({ oriantation }) =>
      oriantation === 'left'
        ? css`
            left: 3rem;
          `
        : css`
            right: 3rem;
          `}
  }
`;

const Side: React.FC<React.PropsWithChildren<SideProps>> = ({
  oriantation,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), sidesDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <StyledSide oriantation={oriantation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition in={isMounted} classNames="fadeup" timeout={1000}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledSide>
  );
};

export default Side;
