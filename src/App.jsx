
import {BrowserRouter,Routes, Route } from"react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import PokemonDetailsPage from "./pages/PokemonDetailsPage"
import TypePage from "./pages/TypePage"

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/pokemon-details/:pokId" element={<PokemonDetailsPage/>}/>
            <Route path="/pokemon-by-Types/:pokeType" element={<TypePage/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
