import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import devIcon from '../../assets/images/developer.svg';
import { navDelay } from '../../utils/constants';

const StyledHero = styled.section`
  padding-top: var(--nav-height);
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
  font-family: var(--ff-prea);

  h1 {
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-xxl));
    color: var(--clr-secondary-400);
  }

  h2 {
    color: var(--clr-slate-200);
    margin-bottom: 2rem;
  }

  h2,
  h3 {
    font-size: clamp(var(--fz-heading), 4vw, 4rem);
    line-height: 1.1;
  }

  h3 {
    margin-bottom: 2rem;
  }
  h3,
  p {
    color: var(--clr-slate-300);
    max-width: 45ch;
  }

  .btn {
    margin-top: 2rem;
  }

  .hero-icon {
    max-width: 50%;
  }

  @media (min-width: 60em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const timeout = 1000;

  const one = { el: <h1>Hi, my name is</h1>, ref: React.createRef<HTMLDivElement>() };
  const two = {
    el: <h2>Tarek Elmasri.</h2>,
    ref: React.createRef<HTMLDivElement>(),
  };
  const three = {
    el: <h3>A full-stack software engineer.</h3>,
    ref: React.createRef<HTMLDivElement>(),
  };
  const four = {
    el: (
      <p>
        I&apos;m a full-stack developer specialized in building meaningful and delightful
        digital products that creates an equilibruim between user needs and buisness
        goals.
      </p>
    ),
    ref: React.createRef<HTMLDivElement>(),
  };
  const five = {
    el: (
      <a className="btn" href="/resume.pdf">
        Personal Resume
      </a>
    ),
    ref: React.createRef<HTMLDivElement>(),
  };

  const elementsList = [one, two, three, four, five];
  const imgRef = React.createRef<HTMLImageElement>();
  return (
    <StyledHero>
      <div>
        <TransitionGroup component={null}>
          {isMounted &&
            elementsList.map((element, i) => (
              <CSSTransition
                key={i}
                nodeRef={element.ref}
                in={isMounted}
                classNames="fadeup"
                timeout={timeout}
              >
                {
                  <div ref={element.ref} style={{ transitionDelay: `${i * 100}ms` }}>
                    {element.el}
                  </div>
                }
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
      <div className="hero-icon">
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              nodeRef={imgRef}
              in={isMounted}
              classNames="fade"
              timeout={timeout}
            >
              <img ref={imgRef} src={devIcon} alt="developer on laptop icon" />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </StyledHero>
  );
};

export default Hero;
