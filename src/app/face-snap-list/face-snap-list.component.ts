import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {FaceSnapsService} from "../services/face-snaps.service";
import {interval} from "rxjs";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
faceSnaps!:FaceSnap[]


  constructor(private faceSnapsService:FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();


    interval(1000).pipe(
      take(10),
      tap(console.log)
    ).subscribe()

  }

  trackByTitle(index: number, faceSnap: any): string {
    return faceSnap.title;
  }
}


