import Header from './components/Header';
import Slider from './components/Slider';
import Products from './components/Products';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import Newsupdate from './components/NewsLetter';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <ProductDetail/>
      <Categories/>
      <Products/>
      <Newsupdate/>
      <Footer/>
    </div>
  );
}

export default App;
