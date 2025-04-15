import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/home';
import Attraction from './pages/attraction';
import FoodInfo from './pages/food';
import Planner from './pages/planner';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/place" element={<Attraction />} />
            <Route path="/food" element={<FoodInfo />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
