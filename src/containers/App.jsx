import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SocialNetwork from '../pages/SocialNetwork';
import Home from '../pages/Home';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/socialNetwork" element={<SocialNetwork />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
