import { Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private router:Router) {}


  onContinue() {
    this.router.navigateByUrl('/faceSnaps')
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
