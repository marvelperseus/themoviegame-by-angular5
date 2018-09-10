import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayreScoreListComponent } from './playre-score-list.component';

describe('PlayreScoreListComponent', () => {
  let component: PlayreScoreListComponent;
  let fixture: ComponentFixture<PlayreScoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayreScoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayreScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
