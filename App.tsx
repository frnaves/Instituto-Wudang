import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Numbers from './pages/Numbers';
import Communication from './pages/Communication';
import MartialArts from './pages/MartialArts';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/numeros" element={<Numbers />} />
          <Route path="/comunicacao" element={<Communication />} />
          <Route path="/artemarcial" element={<MartialArts />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
