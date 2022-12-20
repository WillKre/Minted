import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import { en } from '../../lang';
import { Button } from './Button';
import { text } from '../../App.css';
import { Header } from '../../components/Header';
import { container, buttons, lottie } from './Home.css';
import blockchainAnimation from '../../assets/blockchain.json';

export function Home() {
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
        <Header />
        <p className={text}>{en.welcome.subtitle}</p>
      </div>

      <Lottie
        loop={false}
        className={lottie}
        animationData={blockchainAnimation}
      />

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
