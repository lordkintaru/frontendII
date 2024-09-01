
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrincipalContainer from './components/PrincipalContainer';
import CharactersListPage from './pages/CharactersListPage';
import fetchDataFromAPI from './services/fetchDataFromAPI';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Conteiner from './components/Conteiner';
import PageNotFound from './pages/PageNotFound';
import ElementsPage from './pages/ElementsPage';



function App() {



  return (
    <>
      <BrowserRouter>
        <Header fetchData={fetchDataFromAPI}/>
        <PrincipalContainer>
            <Routes>
              <Route path='/' element='404'></Route>'
              <Route path='/characters' element={<CharactersListPage fetchData={fetchDataFromAPI}/>}>  </Route>
              <Route path='/*' element={ <PageNotFound/>}></Route>'
              <Route path='/elements' element={<ElementsPage fetchData={fetchDataFromAPI}/>}></Route>
              
            </Routes>
        </PrincipalContainer>
        <Footer/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
