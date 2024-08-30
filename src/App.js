
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import fetchDataFromAPI from './services/fetchDataFromAPI';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header fetchData={fetchDataFromAPI}/>
        <main >
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>

         <h3>dasdasdasds</h3>v
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>

         <h3>dasdasdasds</h3>v
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>
         <h3>dasdasdasds</h3>

         <h3>dasdasdasds</h3>v
         <h3>dasdasdasds</h3>


        </main>
    
        <Footer></Footer>
      </BrowserRouter>
  
    </>
  );
}

export default App;
