import { useState } from 'react';
import { useTimeout } from '@junipero/react';

import './index.scss';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
      className="SplashScreen absolute bg-coal h-screen w-screen flex z-50"
      style={{ left: loading ? '0' : '-100vw'}}
    >
      <img className="logo m-auto" src="/img/logo-explore.png" alt="logo" />
    </div>
  )
  };

export default SplashScreen;