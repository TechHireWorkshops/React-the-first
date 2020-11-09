import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterPage({ characterList, getCharacters }) {
  
  return (
    <div className='characters'>
      <h1>Characters from the show</h1>
      <div className='character-flex'>
        {characterList&&characterList.map(character => {
          return <CharacterCard character={character} />;
        })}
      </div>
    </div>
  );
}
