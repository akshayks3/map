import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMapComponent } from './state-map.component';

describe('StateMapComponent', () => {
  let component: StateMapComponent;
  let fixture: ComponentFixture<StateMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
