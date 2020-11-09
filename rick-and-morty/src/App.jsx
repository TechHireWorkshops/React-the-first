import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import axios from 'axios';
import CharacterPage from './components/CharacterPage';

function App() {
  const [name, setName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [characterList, setCharacterList] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const changeName = () => {
    setName(nameInput);
    setNameInput('');
    setShowInput(false);
  };

  const handleChange = e => {
    const value = e.target.value;
    setNameInput(value);
  };

  const getCharacters = async () => {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character/'
    );
    setCharacterList(response.data.results);
  };

  return (
    <div className='app'>
      <Header />
      <Hero />
      <p>Enter your name below</p>
      {showInput === true && (
        <input type='text' value={nameInput} onChange={handleChange} />
      )}
      <h1>Hello, {name}!</h1>
      <button onClick={changeName}>Change Name</button>
      <About />
      <CharacterPage
        characterList={characterList}
        getCharacters={getCharacters}
      />
    </div>
  );
}

export default App;
