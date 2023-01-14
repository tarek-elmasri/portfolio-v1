import styled from 'styled-components';

import { email } from '../config/personal';
import Side from './Side';

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    writing-mode: vertical-rl;
    letter-spacing: 0.05rem;
    margin-bottom: 1rem;
    &:hover {
      transform: translateY(-5px);
    }
  }

  ::after {
    content: '';
    width: 1px;
    height: 10rem;
    background-color: var(--clr-slate-300);
  }
`;

const Email = () => {
  return (
    <Side oriantation="right">
      <StyledEmail>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledEmail>
    </Side>
  );
};

export default Email;
