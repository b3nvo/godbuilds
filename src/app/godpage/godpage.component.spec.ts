import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodpageComponent } from './godpage.component';

describe('GodpageComponent', () => {
  let component: GodpageComponent;
  let fixture: ComponentFixture<GodpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
