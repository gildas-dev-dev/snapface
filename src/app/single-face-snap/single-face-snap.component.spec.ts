import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFaceSnapComponent } from './single-face-snap.component';

describe('FaceSnapComponent', () => {
  let component: SingleFaceSnapComponent;
  let fixture: ComponentFixture<SingleFaceSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFaceSnapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
