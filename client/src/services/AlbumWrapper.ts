import {
    AlbumService,
    Album,
    OpenAPI
} from './openapi';

const { getAlbums, postAlbums, getAlbumById } = AlbumService;

OpenAPI.BASE = 'http://localhost:8080';

/**
 * Get all albums
 * @returns Array<Album>
 */
export const getAllAlbums = async () => {
    try {
        const albums: Array<Album> = await getAlbums();
        return albums;

    } catch (error) {
        throw new Error("getAllAlbums failed");
    }
}

/**
 * Get one album
 * @param id 
 * @returns Album
 */
export const getOneAlbum = async (id: string) => {
    try {
        const album: Album = await getAlbumById(id);
        return album;

    } catch (error) {
        throw new Error("getOneAlbum failed");
    }
}

/**
 * Add album
 * @param album
 * @returns Album created
 */
export const addAlbum = async (album: Album) => {
    try {
        return await postAlbums(album)
    }
    catch (error) {
        throw new Error("addAlbum failed");
    }
}