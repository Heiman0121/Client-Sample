import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './page/publicPage/HomePageComponent/HomePage';

import NavBar from './UI/component/NavBar';
import SocialBar from './UI/component/SocialBar';
import Footer from './UI/component/Footer';
//
function App() {
  return (
    <>
      <NavBar />
      <SocialBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
