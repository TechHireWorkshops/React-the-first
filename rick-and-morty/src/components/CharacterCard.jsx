import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <div className='card'>
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}
