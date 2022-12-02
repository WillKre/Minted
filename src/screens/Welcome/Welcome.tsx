import { useNavigate } from 'react-router-dom';

import { en } from '../../lang';
import { Button } from './Button';
import { buttons } from './Welcome.css';

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
      <h1>{en.welcome.title}</h1>
      <p>{en.welcome.subtitle}</p>

      <div className={buttons}>
        <Button
          title={en.welcome.deployButtonTitle}
          onClick={handleGoToDeploy}
        />
        <Button title={en.welcome.mintButtonTitle} onClick={handleGoToMint} />
      </div>
    </section>
  );
}
