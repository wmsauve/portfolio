import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdimg } from './stdimg';

describe('Stdimg', () => {
  let component: Stdimg;
  let fixture: ComponentFixture<Stdimg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stdimg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stdimg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
