import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../photo';
import { NgForOf } from '@angular/common';
import { Album } from '../album';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {

  album!: Album
  photos!: Photo[]

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const albumId = Number(routeParams.get("id"))

    this.albumService.getAlbumById(albumId).subscribe(data => this.album = data)
    this.albumService.getPhotos(albumId).subscribe(data => this.photos = data)
  }

}
