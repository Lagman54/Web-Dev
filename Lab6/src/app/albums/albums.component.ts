import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Album[]

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => this.albums = data)
  }

  onDelete(id: number, event: MouseEvent) {
    event.stopPropagation()
    
    let index = this.albums.findIndex(album => album.id == id)
    this.albums[index].title = "deleting..."
    this.albumService.deleteAlbum(id)
      .subscribe({
        next: () => this.albums.splice(index, 1),
        error: () => this.albums[index].title = "Failed"
      })
  }

}
