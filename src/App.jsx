import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/home';
import Attraction from './pages/attraction';
import FoodInfo from './pages/food';
import Planner from './pages/planner';
import Header from './components/header';
import Footer from './components/footer';
import Ai from './components/aiChat';


// 메인 페이지 불러오는 부분
const App = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <Ai/>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attraction" element={<Attraction />} />
            <Route path="/food" element={<FoodInfo />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
