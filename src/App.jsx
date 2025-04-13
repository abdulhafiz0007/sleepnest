import './assets/styles/main.css';
import {Routes, Route} from 'react-router-dom';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Collection } from './pages/Collection/Collection';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { SingleCard } from './pages/SingleCard/SingleCard';
import { ScrollToTop } from './components/ScrollTop/ScrollTop';
import { HeartPage } from './pages/HeartPage/HeartPage';

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/singleCard/:title' element={<SingleCard />} />
        <Route path='/heartPage' element={<HeartPage />} />
      </Routes>
    </>
  )
}

export default App
