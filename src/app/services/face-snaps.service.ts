import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {SnapType} from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      50
    ),
    new FaceSnap(
      'Arol',
      'Mon meilleur ami depuis tout petit !',
      'https://as1.ftcdn.net/jpg/05/59/08/18/1000_F_559081846_FyvTqzo1Q4TehTu2NL4U3xqQvJeeFwH2.jpg',
      new Date(),
      100
    ),
    new FaceSnap(
      'Mbappé',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrPI6EgaaEsg67YzJo-1D-1hvEGeXMowcMQ&amp;s',
      new Date(),
      150
    ).withLocation('Mbappé au stade jubilant !'),
    new FaceSnap(
      'Ingride',
      'Mon meilleur ami depuis tout petit !',
      'https://i-sam.unimedias.fr/2024/05/13/femme-et-ananas-.jpg?auto=format%2Ccompress&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=501&amp;w=890',
      new Date(),
      200
    ),
    new FaceSnap(
      'Johone',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLat_GPi7KOYkXkxZc5KixS5ZfWJvos9geQ&amp;s',
      new Date(),
      250
    ),

    new FaceSnap(
      'Analorena',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe93Q_HQa1TR0ZW7lDzAnTr9RdUmW2zL5p9Q&amp;s',
      new Date(),
      300
    ),
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      50
    ),
    new FaceSnap(
      'Arol',
      'Mon meilleur ami depuis tout petit !',
      'https://as1.ftcdn.net/jpg/05/59/08/18/1000_F_559081846_FyvTqzo1Q4TehTu2NL4U3xqQvJeeFwH2.jpg',
      new Date(),
      100
    ),
    new FaceSnap(
      'Mbappé',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrPI6EgaaEsg67YzJo-1D-1hvEGeXMowcMQ&amp;s',
      new Date(),
      150
    ).withLocation('Mbappé au stade jubilant !'),
    new FaceSnap(
      'Ingride',
      'Mon meilleur ami depuis tout petit !',
      'https://i-sam.unimedias.fr/2024/05/13/femme-et-ananas-.jpg?auto=format%2Ccompress&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=501&amp;w=890',
      new Date(),
      200
    ),
    new FaceSnap(
      'Johone',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLat_GPi7KOYkXkxZc5KixS5ZfWJvos9geQ&amp;s',
      new Date(),
      250
    ),

    new FaceSnap(
      'Analorena',
      'Mon meilleur ami depuis tout petit !',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe93Q_HQa1TR0ZW7lDzAnTr9RdUmW2zL5p9Q&amp;s',
      new Date(),
      300
    ).withLocation('photo prise sur le net')
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }



  snapFaceSnapById(faceSnapId: string, snapType:SnapType): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    }
    faceSnap.snap(snapType);
  }
}
