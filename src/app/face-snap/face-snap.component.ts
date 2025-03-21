import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`)
      .then((success) => {
        if (success) {
          console.log('Navigation réussie !');
        } else {
          console.log('Navigation a échoué.');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la navigation :', error);
      });
  }
}

