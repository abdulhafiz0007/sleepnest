import './assets/styles/main.css';
import {Routes, Route} from 'react-router-dom';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Collection } from './pages/Collection/Collection';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
