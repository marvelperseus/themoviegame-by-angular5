import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBodyCardComponent } from './game-body-card.component';

describe('GameBodyCardComponent', () => {
  let component: GameBodyCardComponent;
  let fixture: ComponentFixture<GameBodyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBodyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBodyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
