import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaationComponent } from './reservaation.component';

describe('ReservaationComponent', () => {
  let component: ReservaationComponent;
  let fixture: ComponentFixture<ReservaationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
