import { v4 as uuidv4 } from 'uuid';
import {SnapType} from "./snap-type.type";

export class FaceSnap {

    location?: string;
    id: string;

    constructor(
                public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {
      this.id = uuidv4().substring(0, 8);
      console.log(this.id)

    }


    addSnap(): void {
      this.snaps++;
    }

    removeSnap(): void {
      this.snaps--;
    }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }


    setLocation(location: string): void {
      this.location = location;
    }


  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}

