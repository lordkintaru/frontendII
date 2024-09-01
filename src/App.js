
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrincipalContainer from './components/PrincipalContainer';
import CharactersList from './pages/CharactersList';
import fetchDataFromAPI from './services/fetchDataFromAPI';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ConteinerText from './components/ConteinerText';
import PageNotFound from './pages/PageNotFound';



function App() {



  return (
    <>
      <BrowserRouter>
        <Header fetchData={fetchDataFromAPI}/>
        <PrincipalContainer>
            <Routes>
              <Route path='/' element='404'></Route>'
              <Route path='/characters' element={<CharactersList fetchData={fetchDataFromAPI}/>}>  </Route>
              <Route path='/*' element={ <PageNotFound/>}></Route>'
              
            </Routes>
        </PrincipalContainer>
        <Footer/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
