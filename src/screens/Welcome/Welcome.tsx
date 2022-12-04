import { useNavigate } from 'react-router-dom';

import { en } from '../../lang';
import { Button } from './Button';
import { text } from '../../App.css';
import { buttons, title } from './Welcome.css';

export function Welcome() {
  const navigate = useNavigate();

  function handleGoToDeploy() {
    navigate('/deploy');
  }

  function handleGoToMint() {
    navigate('/mint');
  }

  return (
    <section>
      <h1 className={title}>{en.welcome.title}</h1>
      <p className={text}>{en.welcome.subtitle}</p>

      <div className={buttons}>
        <Button
          title={en.welcome.deployButtonTitle}
          subtitle={en.welcome.deployButtonSubtitle}
          onClick={handleGoToDeploy}
        />
        <Button
          title={en.welcome.mintButtonTitle}
          subtitle={en.welcome.mintButtonSubtitle}
          onClick={handleGoToMint}
        />
      </div>
    </section>
  );
}
