import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerlogComponent } from './playerlog.component';

describe('PlayerlogComponent', () => {
  let component: PlayerlogComponent;
  let fixture: ComponentFixture<PlayerlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
