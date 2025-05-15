import React, { useEffect, useState } from 'react';
import { fetchWorldNames } from './services/tibia';

function App() {
  const [worldNames, setWorldNames] = useState([]);

  useEffect(() => {
    fetchWorldNames()
      .then(names => setWorldNames(names))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de Mundos do Tibia</h1>
      <ul>
        {worldNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
