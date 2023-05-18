import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Router from './components/Router';


function App() {

  let [products, setProducts] = useState(
    localStorage.getItem('data') 
    ? JSON.parse(localStorage.getItem("data"))
    : []
  );
  

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
      <Router products={ products }/>
      <Footer />
    </div>
  );
}

export default App;
