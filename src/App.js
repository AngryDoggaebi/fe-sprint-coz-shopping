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
      // 서버에서 api 받아오기
      // axios.get('http://cozshopping.codestates-seb.link/api/v1/products?')
      // dummy data로 public 폴더에서 api 받아오기
      axios.get('http://localhost:3000/fe-sprint-coz-shopping/dummy/datalist.json') 
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
