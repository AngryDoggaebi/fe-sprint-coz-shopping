import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainProducts from './components/MainProducts';


function App() {
  return (
    <div className="App">
      <Header/>

      <div id='wrapper'>
        <div>
          <MainProducts/>
        </div>
      </div>

      
      <Footer/>
    </div>
  );
}

export default App;
