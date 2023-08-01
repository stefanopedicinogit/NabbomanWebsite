import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPage from './pages/Home/Videopage';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import About from './pages/About/About';
import Store from './pages/Store/Store';
import Blog from './pages/Blog/Blog';
import Header from './components/Header';
import DetailedPost from './pages/Blog/DetailedPost';

import './css/animate.min.css';
import './css/animate.css';
import './css/aos.css';
import './css/bootstrap.min.css';
import './css/default.css';
import './css/flaticon.css';
import './css/fontawesome-all.min.css';
import './css/icomoon.css';
import './css/ionicons.min.css';
import './css/magnific-popup.css';
import './css/meanmenu.css';
import './css/odometer.css';
import './css/open-iconic-bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/responsive.css';
import './css/style.css';
import './css/slick.css';
import ProductPage from './pages/Store/ProductPage';
import StripeButton from './pages/Store/StripeButton';
import { SendItemFromForm } from './pages/Store/SendItemsFromForm';
import CheckoutSuccess from './pages/Store/CheckoutSuccess';
import CheckoutCancelled from './pages/Store/CheckoutCancelled';

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
        <Route exact path="/products" element={<Store />} />
        <Route exact path="/blogdetails/:id" element={<DetailedPost/>} />         
        <Route exact path="/store" element={<ProductPage/>} />   
        <Route exact path="/stripe/checkout" element={<StripeButton/>}/>   
        <Route exact path="/senditemfromform" element={<SendItemFromForm/>}/>  
        <Route exact path="/checkoutsuccess" element={<CheckoutSuccess/>}/>
        <Route exact path="/checkoutcancel" element={<CheckoutCancelled/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
