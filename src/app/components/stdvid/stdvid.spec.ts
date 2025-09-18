import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdvid } from './stdvid';

describe('Stdvid', () => {
  let component: Stdvid;
  let fixture: ComponentFixture<Stdvid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stdvid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stdvid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
