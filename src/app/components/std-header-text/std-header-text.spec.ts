import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHeaderText } from './std-header-text';

describe('StdHeaderText', () => {
  let component: StdHeaderText;
  let fixture: ComponentFixture<StdHeaderText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdHeaderText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdHeaderText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
