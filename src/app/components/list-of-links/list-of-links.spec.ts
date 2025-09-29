import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLinks } from './list-of-links';

describe('ListOfLinks', () => {
  let component: ListOfLinks;
  let fixture: ComponentFixture<ListOfLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
