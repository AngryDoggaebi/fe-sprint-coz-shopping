import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainProducts from './components/MainProducts';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  let [products, setProducts] = useState( JSON.parse(localStorage.getItem("data")) );
  

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      axios.get('http://cozshopping.codestates-seb.link/api/v1/products?')
        .then((result) => {
          localStorage.setItem("data", JSON.stringify(result.data));
          setProducts(result.data);
        })
        .catch(() => { console.log('실패함~') })
    }
  }, [])



  return (
    <div className="App">
      <Header />

      <div id='wrapper'>
        <div>
          <MainProducts products={ products === null ? undefined  : products}/>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default App;
