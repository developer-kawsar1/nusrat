
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';
import NotFound from './component/NotFound/NotFound';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
   
     <Header /> 


     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />

        <Route path="*" element={<NotFound/>} />
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }>

        </Route>
        
      </Routes> 

      <Footer/>
    </div>
  );
}

export default App;
