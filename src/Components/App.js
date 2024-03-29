import './App.css';

import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom';

import NavBar from './CommonComponents/NavBar/NavBar';
import Footer from './CommonComponents/Footer/Footer';

import HomePage from './Pages/HomePage/HomePage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Games from './Pages/Games/Games';
import JumpToLive from './Pages/Games/JumpToLive/JumpToLive';
import Blog from './Pages/Blog/Blog';
import SingleBlog from './Pages/SingleBlog/SingleBlog'
import SingleArticle from './Pages/SingleArticle/SingleArticle';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


function App() {
  return (
  <BrowserRouter>
  <section id="body-container">
    <section id="body-content">
      <NavBar /> 
      <section id="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/single-blog" element={<SingleBlog />} />
          <Route path="/article/:name" element={<SingleArticle />} />
          <Route path="/games" element={<Games />} >
            {/* <Route path="/jump-to-live" element={<AboutMe />} /> */}
          </Route>
          <Route path="/games/jump-to-live" element={<JumpToLive />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </section>
  </section>
  </BrowserRouter>
  );
}

export default App;
