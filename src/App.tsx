import React from 'react';
import './App.css';
import YukariRoom from 'components/pages/YukariRoom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useInitialLoading } from 'hooks/useInitialLoading';
import InitialLoading from 'components/pages/InitialLoading';
import AboutMe from 'components/pages/AboutMe';
import { Helmet } from 'react-helmet';
import normalImg from './assets/images/stands/yukari_normal.png';
import laughImg from './assets/images/stands/yukari_laugh_open.png';

const App: React.FC<unknown> = () => {
  const [loadingSeconds, isInitialLoading] = useInitialLoading();
  if (isInitialLoading) {
    return <InitialLoading loadingSeconds={loadingSeconds} />;
  }

  return (
    <div className="App">
      <Helmet>
        <link rel="prefetch" href={normalImg} />
        <link rel="prefetch" href={laughImg} />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/room" element={<YukariRoom />}>
            <Route path="aboutMe" element={<AboutMe />} />
          </Route>
          <Route path="*" element={<Navigate to="/room" replace />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
