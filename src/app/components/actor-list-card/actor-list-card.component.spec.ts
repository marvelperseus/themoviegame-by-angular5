import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorListCardComponent } from './actor-list-card.component';

describe('ActorListCardComponent', () => {
  let component: ActorListCardComponent;
  let fixture: ComponentFixture<ActorListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
