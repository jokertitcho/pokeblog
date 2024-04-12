
import {BrowserRouter,Routes, Route } from"react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import PokemonDetailsPage from "./pages/PokemonDetailsPage"
import TypePage from "./pages/TypePage"
import RandomTeamPage from "./pages/RandomTeamPage"
import FindByNamePage from "./pages/FindByNamePage"
import ResistancePage from "./pages/ResistancePage"

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/pokemon-details/:pokId" element={<PokemonDetailsPage/>}/>
            <Route path="/pokemon-by-Types/:pokeType" element={<TypePage/>}/>
            <Route path="/random-team/" element={<RandomTeamPage/>}/>
            <Route path="/find-by-name/" element={<FindByNamePage/>}/>
            <Route path="/resitance-Types/:PokRes" element={<ResistancePage/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
