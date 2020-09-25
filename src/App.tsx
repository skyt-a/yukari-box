import React from 'react';
import './App.css';
import YukariRoom from 'components/pages/YukariRoom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useInitialLoading } from 'hooks/useInitialLoading';
import InitialLoading from 'components/pages/InitialLoading';

const App: React.FC<unknown> = () => {
  const [loadingSeconds, isInitialLoading] = useInitialLoading();
  if (isInitialLoading) {
    return <InitialLoading loadingSeconds={loadingSeconds} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/room" element={<YukariRoom />} />
          <Route path="*" element={<Navigate to="/top" replace />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
