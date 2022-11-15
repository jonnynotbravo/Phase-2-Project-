// import logo from './logo.svg';
import './App.css';
import CharacterScreen from './CharacterScreen'
import PartyScreen from './PartyScreen'
import StarterScreen from './StarterScreen'

function App() {
  return (
    <div id='window'>
      <CharacterScreen />
      <PartyScreen />
      <StarterScreen />
    </div>
  );
}

export default App;
