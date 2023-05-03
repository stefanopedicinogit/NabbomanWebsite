import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPage from './pages/Home/Videopage';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import About from './pages/About/About';
import Store from './pages/Store/Store';
import Blog from './pages/Blog/Blog';
import Header from './components/Header';
import DetailedPost from './pages/Blog/DetailedPost';
import './style.css';

function App() {

  return (
    <Router>
      {/* <CssBaseline /> */}
      <Header/>

      <Routes>  
        <Route exact path="/" element={<VideoPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/blog-details/:id" element={<DetailedPost/>} />           
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
