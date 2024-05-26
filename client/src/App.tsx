import React from 'react';
import { getAllAlbums, addAlbum, getOneAlbum } from './services/api/AlbumWrapper'
import { Album, ApiError } from './services/openapi'
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Button variant="contained" onClick={() => console.log('Button clicked')} > First MUI Component</Button >
    </div >
  );
}

export default App;
