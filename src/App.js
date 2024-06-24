import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Petlist from './petListing';
import MainPage from './MainPage';
function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
          <Route path="/petlist" element={<Petlist />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
