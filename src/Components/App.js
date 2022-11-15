import { React, useState } from 'react';
import './App.css';
import CharacterScreen from './CharacterScreen'
import PartyScreen from './PartyScreen'
import StarterScreen from './StarterScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState('')

  let currentScreenLabel

  return (
    <div id='window'>
      <header>
        <span>{currentScreenLabel}</span>
      </header>
      <CharacterScreen id="character-screen"/>
      <PartyScreen id="party-screen"/>
      <StarterScreen id="starter-screen"/>
    </div>
  );
}

export default App;
