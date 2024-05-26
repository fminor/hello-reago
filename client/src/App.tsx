import React from 'react';
import { getAllAlbums, addAlbum, getOneAlbum } from './services/api/AlbumWrapper'
import { Album, ApiError } from './services/openapi'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
