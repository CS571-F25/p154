import { Provider } from './components/ui/provider'
import { Route, Navigate } from 'react-router'
import { HashRouter, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import PlacesToEat from './pages/PlacesToEat'
import Sightseeing from './pages/Sightseeing'
import Activities from './pages/Activities'
import BucketList from './pages/BucketList'
import Ratings from './pages/Ratings'
import NavBar from './components/Navbar.jsx'
import SkipLink from './components/SkipLink.jsx'

function App() {

  return (
    <Provider> 
      <HashRouter> 
        <SkipLink />
        <NavBar />
        <main id="main-content">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Navigate to="/places-to-eat" replace />} />
            <Route path="/places-to-eat" element={<PlacesToEat />} />
            <Route path="/sightseeing" element={<Sightseeing />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/bucket-list" element={<BucketList />} />
            <Route path="/ratings" element={<Ratings />} />
          </Routes>
        </main>
      </HashRouter>
    </Provider>
  )
}

export default App
