import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LartiComponent } from './larti.component';

describe('LartiComponent', () => {
  let component: LartiComponent;
  let fixture: ComponentFixture<LartiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LartiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
