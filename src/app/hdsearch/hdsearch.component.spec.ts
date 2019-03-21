import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdsearchComponent } from './hdsearch.component';

describe('HdsearchComponent', () => {
  let component: HdsearchComponent;
  let fixture: ComponentFixture<HdsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
