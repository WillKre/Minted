import { en } from '../../lang';
import gitHubLogo from './github.svg';
import { button, image } from './GitHubButton.css';

export function GitHubButton() {
  function navigateToRepo() {
    window.open('https://github.com/WillKre/Mintz', '_blank');
  }

  return (
    <button className={button} onClick={navigateToRepo}>
      <img className={image} src={gitHubLogo} alt={en.common.gitHubLogoAlt} />
    </button>
  );
}
