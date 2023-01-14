import React, { useEffect } from 'react';
import styled from 'styled-components';

import meImg from '../../assets/images/me.jpeg';
import { sr, srConfig } from '../../config/reveal';
const StyledAboutSection = styled.section`
  .inner {
    display: grid;
    padding-bottom: 2rem;
    gap: 1rem;

    @media (min-width: 55em) {
      grid-template-columns: auto auto;
    }

    .styled-img {
      position: relative;
      justify-self: center;
      z-index: 1;
      max-width: 15rem;
      aspect-ratio: 1 / 1.2;

      @media (min-width: 55em) {
        justify-self: start;
      }

      > img {
        border-radius: var(--border-radius);
        mix-blend-mode: multiply;
      }

      &:hover {
        > img {
          mix-blend-mode: normal;
        }

        &::before {
          transform: translate(1rem, 1rem);
        }
      }

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: var(--border-radius);
        border: 2px solid var(--clr-secondary-400);
        transform: translate(1.5rem, 1.5rem);
        transition: var(--transition);
      }

      &::after {
        content: '';
        border-radius: var(--border-radius);
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: var(--clr-secondary-400);
      }
    }
  }
`;

const StyledText = styled.div`
  display: grid;
  align-content: start;
  gap: 1rem;
  color: var(--clr-slate-300);

  > p {
    max-width: 60ch;
  }

  .arrow-list {
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (min-width: 55em) {
      gap: 3rem;
    }
    li {
      position: relative;
      padding-left: 1rem;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--clr-secondary-400);
      }
    }
  }
`;
const About = () => {
  const revealContainer = React.createRef<HTMLElement>();

  useEffect(() => {
    sr?.reveal(revealContainer.current!, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h4 className="text-title">About Me</h4>
      <div className="inner">
        <StyledText>
          <p>
            Hello!, My name is Tarek and I&apos;m a self tought web developer. My
            background is medicine, That means programming is my passion!. My journey with
            web development started back in 2019 as a hoppy until i decided to take it to
            the next level.
          </p>

          <p>
            Fast-forward to today, I&apos;ve had the opportunity to join some technology
            related courses to strengthen my knowledge on how things work on web.
          </p>

          <p>Here are some technologies I&apos;ve been working with recently:</p>

          <ul className="arrow-list">
            <div>
              <li>Node</li>
              <li>Express</li>
              <li>Redux</li>
            </div>
            <div>
              <li>React.js</li>
              <li>RDS</li>
              <li>Redis</li>
            </div>
            <div>
              <li>Typescript</li>
              <li>AWS</li>
              <li>JWT</li>
            </div>
          </ul>
        </StyledText>
        <div className="styled-img">
          <img className="img" src={meImg} alt="Tarek Elmasri" />
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
