import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdiPetComponent } from './perdi-pet.component';

describe('PerdiPetComponent', () => {
  let component: PerdiPetComponent;
  let fixture: ComponentFixture<PerdiPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerdiPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdiPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
