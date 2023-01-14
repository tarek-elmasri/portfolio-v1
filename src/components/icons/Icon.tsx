import IconGitHub from './IconGithub';
import IconLinkedin from './IconLinkedin';

const Icon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;

    case 'Linkedin':
      return <IconLinkedin />;

    default:
      return null;
  }
};

export default Icon;
