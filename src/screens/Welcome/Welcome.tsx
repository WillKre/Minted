import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import { en } from '../../lang';
import { Button } from './Button';
import { text } from '../../App.css';
import blockchainAnimation from '../../assets/blockchain.json';
import { container, buttons, lottie, title } from './Welcome.css';

export function Welcome() {
  const navigate = useNavigate();

  function handleGoToDeploy() {
    navigate('/deploy');
  }

  function handleGoToMint() {
    navigate('/mint');
  }

  return (
    <section className={container}>
      <div>
        <h1 className={title}>{en.welcome.title}</h1>
        <p className={text}>{en.welcome.subtitle}</p>
      </div>

      <Lottie className={lottie} animationData={blockchainAnimation} />

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
