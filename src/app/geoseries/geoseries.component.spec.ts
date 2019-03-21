import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoseriesComponent } from './geoseries.component';

describe('GeoseriesComponent', () => {
  let component: GeoseriesComponent;
  let fixture: ComponentFixture<GeoseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
