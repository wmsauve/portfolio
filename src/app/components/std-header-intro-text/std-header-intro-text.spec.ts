import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHeaderIntroText } from './std-header-intro-text';

describe('StdHeaderIntroText', () => {
  let component: StdHeaderIntroText;
  let fixture: ComponentFixture<StdHeaderIntroText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdHeaderIntroText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdHeaderIntroText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
