import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartiComponent } from './darti.component';

describe('DartiComponent', () => {
  let component: DartiComponent;
  let fixture: ComponentFixture<DartiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
