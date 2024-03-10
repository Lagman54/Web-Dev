import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album
  albumName = new FormControl('')
  save: string = "Save"

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const albumId = Number(routeParams.get('id'))

    this.albumService.getAlbumById(albumId).subscribe(data => {
      this.album = data
      this.albumName.setValue(data.title)
    })
  }

  onSubmit() {
    this.save = "Saving..."
    this.album.title = this.albumName.value!
    // console.log(this.album.title)
    this.albumService.updateAlbum(this.album)
      .subscribe({
        next: () => this.save = "Saved",
        error: () => this.save = "Failed",
      })
    return false
  }

}
