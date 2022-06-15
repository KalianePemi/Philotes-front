import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheiPetComponent } from './achei-pet.component';

describe('AcheiPetComponent', () => {
  let component: AcheiPetComponent;
  let fixture: ComponentFixture<AcheiPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheiPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheiPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
