import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

function MyComponent() {
  const [data, setData] = useState([]);
  const [searchTerm,setsearchTerm]=useState('');
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const handleSearch = (event) => {
    setsearchTerm(event.target.value);
  };
  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="container">
      <h1>Harry Potter Characters</h1>
      < div className="search-bar">
        <input
          type="text"
          placeholder="Search by character..."
          value={searchTerm}
          onChange={handleSearch}
        />
        
      </div>
      <div className='pageCards'>
      {filteredData.map((character) => (
        <div className = 'cards'key={character.name}>
          <h2>{character.name}</h2>
          <img src={character.image.length <=0 ? "https://via.placeholder.com/150": character.image} alt={character.name} />
          <p>House: {character.house}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>DateofBirth: {character.dateOfBirth}</p>
          <p>ancestry:{character.ancestry}</p>
          <p>eyeColour:{character.eyeColour}</p>
          <p>wizard:{character.wizard}</p>
          <p>actor:{character.actor}</p>
          <p>alive:{character.alive}</p>
        </div>
      ))}
        </div>      
     
    </div>
  );
}

export default MyComponent;