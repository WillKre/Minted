import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import backIcon from './back.png';
import { button } from '../../App.css';
import { buttons, container, img, screen } from './View.css';

type ViewProps = {
  children: ReactNode;
};

export function View({ children }: ViewProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleGoToHome() {
    navigate('/');
  }

  return (
    <div className={container}>
      <div className={screen}>{children}</div>

      <div className={buttons}>
        {location.pathname !== '/' && (
          <button type="button" className={button} onClick={handleGoToHome}>
            Back
          </button>
        )}
      </div>
    </div>
  );
}
