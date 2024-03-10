import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './album';
import { Observable } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private http: HttpClient
  ) { }

  private albumUrl = 'https://jsonplaceholder.typicode.com/albums'

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumUrl, album)
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl)
  }

  getAlbumById(id: number): Observable<Album> {
    const url = `${this.albumUrl}/${id}`
    return this.http.get<Album>(url)
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.albumUrl}/${album.id}`
    return this.http.put<Album>(url, album)
  }

  deleteAlbum(id: number): Observable<Album> {
    const url = `${this.albumUrl}/${id}`
    return this.http.delete<Album>(url)
  }

  getPhotos(id: number): Observable<Photo[]> {
    const url = `${this.albumUrl}/${id}/photos`
    return this.http.get<Photo[]>(url)
  }

}
