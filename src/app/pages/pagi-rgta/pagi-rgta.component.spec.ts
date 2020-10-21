import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagiRgtaComponent } from './pagi-rgta.component';

describe('PagiRgtaComponent', () => {
  let component: PagiRgtaComponent;
  let fixture: ComponentFixture<PagiRgtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagiRgtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagiRgtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
