import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AllGames } from './components/allGames';
import GameStats from './components/gameStats';
import Header from './components/header';
import Navbar from './components/navbar';
import AllPlayers from './components/allPlayers';
import Player from './components/player';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <div style={{paddingTop: '50px'}}>
      <Header  className="App-header" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/games" element={<AllGames />}/>
        <Route path="/stats" element={<GameStats />}/>
        <Route path="/players" element={<AllPlayers />}/>
        <Route path="/player" element={<Player />}/>
      </Routes>
      </div>   
    </div>
  );
}

export default App;
