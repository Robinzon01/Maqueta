import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartiComponent } from './barti.component';

describe('BartiComponent', () => {
  let component: BartiComponent;
  let fixture: ComponentFixture<BartiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
