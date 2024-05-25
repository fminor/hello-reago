/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Album } from '../models/Album';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AlbumService {
    /**
     * Get Albums
     * @returns Album OK
     * @throws ApiError
     */
    public static getAlbums(): CancelablePromise<Array<Album>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/albums',
        });
    }
    /**
     * Post Albums
     * @param requestBody
     * @returns Album Created
     * @throws ApiError
     */
    public static postAlbums(
        requestBody?: Album,
    ): CancelablePromise<Album> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/albums',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
            },
        });
    }
    /**
     * Get Album By ID
     * @param id
     * @returns Album OK
     * @throws ApiError
     */
    public static getAlbumById(
        id: string,
    ): CancelablePromise<Album> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/albums/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
