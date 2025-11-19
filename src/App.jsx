import { Provider } from './components/ui/provider'
import { Route } from 'react-router'
import { HashRouter, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Restaurants from './pages/Restaurants'
import Sightseeing from './pages/Sightseeing'
import Activities from './pages/Activities'
import NavBar from './components/Navbar.jsx'

function App() {

  return (
    <Provider> 
      <HashRouter> 
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/sightseeing" element={<Sightseeing />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App
