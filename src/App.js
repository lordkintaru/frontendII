
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrincipalContainer from './components/PrincipalContainer';
import InfoPage from './pages/InfoPage';
import fetchDataFromAPI from './services/fetchDataFromAPI';
import { BrowserRouter } from 'react-router-dom';


function App() {



  return (
    <>
      <BrowserRouter>
        <Header fetchData={fetchDataFromAPI}/>
        <PrincipalContainer>
         <InfoPage fetchData={fetchDataFromAPI}/>
        </PrincipalContainer>
    
        <Footer/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
