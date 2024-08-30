
import './App.css';
import Header from './components/Header';
import fetchDataFromAPI from './services/fetchDataFromAPI';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header fetchData={fetchDataFromAPI}/>
        <h1>sdasda</h1>
        <h2>dsaduia</h2>
        <h1>esad</h1>
        <h1>esad</h1> <h1>esad</h1> <h1>esad</h1> <h1>esad</h1> <h1>esad</h1>
        
      </BrowserRouter>
  
    </>
  );
}

export default App;
