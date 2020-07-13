import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  filter = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const { username } = this.activatedRoute.snapshot.params;
    this.photoService
      .listFromUser(username)
      .subscribe(photos => (this.photos = photos));
  }
}