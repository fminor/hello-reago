import React, { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Album, ApiError } from '../../services/openapi';
import { getAllAlbums, addAlbum, getOneAlbum } from '../../services/api/AlbumWrapper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Browse = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    const [error, setError] = useState<ApiError | null>();

    // Setup Form
    const [idValue, setIdValue] = useState<string>("4");
    const [artistValue, setArtistValue] = useState<string>("Joe Dirt");
    const [titleValue, setTitleValue] = useState<string>("College");
    const [priceValue, setPriceValue] = useState<number>(9.99);

    // Watch
    const onIdChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setIdValue(e.currentTarget.value);
    const onArtistChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setArtistValue(e.currentTarget.value);
    const onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setTitleValue(e.currentTarget.value);
    const onPriceChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setPriceValue(parseFloat(e.currentTarget.value));

    const getAlbumsClick = useCallback(async () => {
        setAlbums(await getAllAlbums())
    }, []);

    const addAlbumClick = useCallback(async () => {
        const album: Album = {
            artist: artistValue,
            id: idValue,
            price: priceValue,
            title: titleValue
        }
        addAlbum(album)
    }, [artistValue, idValue, priceValue, titleValue])

    useEffect(() => {
        getAlbumsClick();
    }, [getAlbumsClick])

    return (
        <Box sx={{ flexGrow: 1 }} m={1}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>This is the browse albums page</Item>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={getAlbumsClick} >Get Albums</Button>
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
            <Divider />
            <Box component="form" padding={1}>
                <div>
                    <TextField
                        required
                        id="albumID"
                        label="Album ID"
                        onChange={onIdChange}
                        value={idValue}
                    />
                    <TextField
                        required
                        id="albumArtist"
                        label="Artist"
                        onChange={onArtistChange}
                        value={artistValue}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="albumTitle"
                        label="Album Title"
                        onChange={onTitleChange}
                        value={titleValue}
                    />
                    <TextField
                        required
                        id="albumPrice"
                        label="Album Price"
                        onChange={onPriceChange}
                        value={priceValue}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        onClick={addAlbumClick}
                    >
                        Add Album
                    </Button>
                </div>

            </Box>
            <Divider />
            <Grid container spacing={1}>
                {albums.map((album: Album, index: number) => (
                    <Grid item key={index}>
                        <Item>{album.artist}: {album.title} | {album.price}</Item>
                    </Grid>
                ))}

            </Grid>
        </Box >
    )
}

export default Browse
