import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsearchComponent } from './headsearch.component';

describe('HeadsearchComponent', () => {
  let component: HeadsearchComponent;
  let fixture: ComponentFixture<HeadsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
