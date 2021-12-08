import { useState } from "react";

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function addArtist() {
    setName("");
    setArtists([...artists, { id: nextId++, name: name }]);
  }

  return (
    <>
      <h1>Inspiring Magicians:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addArtist}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.id + 1} {artist.name}
          </li>
        ))}
      </ul>
    </>
  );
}
