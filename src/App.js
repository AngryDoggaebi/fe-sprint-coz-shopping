import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Router from './components/Router';
import styled from 'styled-components';

let Div = styled.div`
  overflow-x: hidden; 
  overflow-y: auto;
`

function App() {

  let [products, setProducts] = useState(
    localStorage.getItem('data') 
    ? JSON.parse(localStorage.getItem("data"))
    : []
  );

  localStorage.getItem('bookmark')
  ? localStorage.getItem('bookmark')
  : localStorage.setItem('bookmark', JSON.stringify([]))
  

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
    
    <Div className="App">
      <Header />
      <Router products={ products }/>
      <Footer />
    </Div>
  );
}

export default App;
