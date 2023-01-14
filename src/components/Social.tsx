import styled from 'styled-components';

import { socialMedia } from '../config/personal';
import Icon from './icons/Icon';
import Side from './Side';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  /* justify-content: flex-end; */

  svg {
    color: var(--clr-slate-300);
    width: 1.25rem;
    margin-bottom: 1rem;
    transition: var(--transition);

    &:hover {
      color: var(--clr-secondary-400);
      transform: translateY(-5px);
    }
  }

  &::after {
    content: '';
    width: 1px;
    height: 20rem;
    background-color: var(--clr-slate-300);
  }
`;

const Social = () => {
  return (
    <Side oriantation="left">
      <StyledSocialList>
        {socialMedia.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url} target="_blank" aria-label={name} rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </StyledSocialList>
    </Side>
  );
};

export default Social;
