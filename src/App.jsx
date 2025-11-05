import './App.css'
import { Provider } from './components/ui/provider'
import { Route } from 'react-router'
import { HashRouter, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <Provider> 
      <HashRouter> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App
