import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardHeaderComponent } from './score-card-header.component';

describe('ScoreCardHeaderComponent', () => {
  let component: ScoreCardHeaderComponent;
  let fixture: ComponentFixture<ScoreCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
