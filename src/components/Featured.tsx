import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import projectImg from '../assets/images/project1.png';
import { revealDelay } from '../utils/constants';

const StyledFeatured = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .mask-to-left-enter {
    position: relative;
    overflow-x: hidden;

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--clr-secondary-400);
      transition: var(--transition);
    }
  }

  .mask-to-left-enter-active {
    ::after {
      transform: translateX(-100%);
    }
  }

  .text-featured {
    color: var(--clr-secondary-400);
    font-size: 0.825rem;
    font-family: var(--ff-prea);
  }

  h5 {
    font-size: var(--fz-xxl);
    line-height: 1.5;
    color: var(--clr-neutral-100);
  }

  .project-image {
    position: relative;
    transform: translateX(-5rem);
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      width: calc(0.5 * 100%);
      height: 100%;
      left: 0;
      z-index: -1;
      box-shadow: 0 0 10rem 1rem var(--clr-secondary-400);
    }
  }
`;

const StyledCard = styled.div`
  position: relative;
  z-index: 2;
  padding: 1rem;
  background-color: var(--shadow-primary-500);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  width: fit-content;
  > p {
    max-width: 60ch;
  }
`;
const Featured = () => {
  const timeout = 1000;

  return (
    <StyledFeatured>
      <div>
        <p className="text-featured">Featured Project</p>
        <h5>Example Project</h5>
        <StyledCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores
            doloremque labore at, animi officia nisi earum porro. Repellendus voluptates
            nam aspernatur odit quos atque laboriosam ducimus consectetur quia suscipit?
          </p>
        </StyledCard>
        <div className="project-links"></div>
      </div>
      <div className="project-image">
        <img src={projectImg} alt="screenshot of example project" />
      </div>
    </StyledFeatured>
  );
};

export default Featured;
