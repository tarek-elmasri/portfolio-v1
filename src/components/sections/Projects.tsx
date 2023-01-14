import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sr, srConfig } from '../../config/reveal';
import Featured from '../Featured';

const StyledProjects = styled.section``;

const Projects = () => {
  const revealContainer = React.createRef<HTMLElement>();

  useEffect(() => {
    sr?.reveal(revealContainer.current!, srConfig());
  }, []);

  return (
    <StyledProjects ref={revealContainer}>
      <Featured />
    </StyledProjects>
  );
};

export default Projects;
